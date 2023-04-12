import React, {useEffect, useState} from 'react';
import css from './single_thefts_page.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import { getSingleTheft} from "../../storage/counterSlise";


function SingleTheftsPage() {

    const { _Id } = useParams();


    const dispatch = useDispatch()

    const [theftItem, setTheftItem] = useState('');



    useEffect(() =>  {
         dispatch(getSingleTheft({_Id,setTheftItem}))

    }, []);

    return (
        <section className={css.wrapper}>
        <div>{theftItem._id}</div>
            <Link to={`/thefts/${_Id}/edit`} >
                <button>Edit Theft</button>
            </Link>

        </section>

    );
}

export default SingleTheftsPage;