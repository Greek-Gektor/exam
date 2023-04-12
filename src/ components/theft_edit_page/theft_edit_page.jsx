import React, {useEffect, useState} from 'react';
import css from './theft_edit_page.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import { editTheft, getSingleTheft} from "../../storage/counterSlise";


function TheftEditPage() {

    const { _Id } = useParams();

    const dispatch = useDispatch()

    const [theftItem, setTheftItem] = useState('');

    useEffect(() =>  {
        dispatch(getSingleTheft({_Id,setTheftItem}))

    }, []);

    const onIdChanged = (e) => setTheftItem(theftItem => ({...theftItem, licenseNumber: e.target.value}))

    const onTheftEditClicked = async () => {
        setTheftItem({
            _id: theftItem._id,
            licenseNumber:theftItem.licenseNumber
            }
        )
        await dispatch(editTheft({theftItem}))
        setTheftItem({
            licenseNumber:''
        })
    }


    return (
        <section className={css.wrapper}>
            <h2>Edit Theft</h2>
            <form>
                <label htmlFor="Theft">Theft:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder=""
                    value={theftItem.licenseNumber}
                    onChange={onIdChanged}
                />
            </form>
            <button type="button" onClick={onTheftEditClicked}>
                Save Post
            </button>


        </section>

    );
}

export default TheftEditPage;