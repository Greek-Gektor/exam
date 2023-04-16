import React, {useEffect, useState} from 'react';
import css from './theft_edit_page_clone.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {editTheft, editTheftClone, getSingleTheft, getSingleTheftClone} from "../../storage/counterSlise";
import { useForm } from "react-hook-form";


function TheftEditPageClone() {

    const { _Id } = useParams();

    const dispatch = useDispatch()

    const [theftItem, setTheftItem] = useState('');

    const { register, handleSubmit } = useForm();

    useEffect(() =>  {

        dispatch(getSingleTheft({_Id,setTheftItem}))

    }, []);


/*    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };*/

    const onSubmitMF = handleSubmit( (data) => {

        const id = theftItem._id
        console.log(data)
        console.log(id)
        return  dispatch(editTheftClone({data,id}));

    });

    const onSubmit =  (data) => {
        /*const token = JSON.parse(window.localStorage.getItem('token'))*/
        const id = theftItem._id
        /*await fetch(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(data)
        });*/
        dispatch(editTheftClone({data, id}))
        console.log(data)

        /*dispatch(editTheftClone({data, id}))*/
        /*console.log(data)*/
    };

    const onSubmitM = (data) =>  {
        const id = theftItem._id
         return  dispatch(editTheftClone({data,id}));
    }



    return (
        <section className={css.wrapper}>
            <h2>Edit Theft Clone</h2>
            <form onSubmit={onSubmitM}>
                <div>
                    <label htmlFor="licenseNumber">licenseNumber:</label>
                    <input
                        defaultValue={theftItem.licenseNumber}
                        {...register("licenseNumber")} />
                </div>

                <button  onClick={onSubmitM}>Submit</button>
                <input type="submit" />
            </form>


        </section>

    );
}

export default TheftEditPageClone;