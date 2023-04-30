import React, {useEffect, useState} from 'react';
import css from './theft_edit_page_clone.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {editTheft, editTheftClone, getSingleTheft} from "../../storage/counterSlise";
import {useForm} from "react-hook-form";


function TheftEditPageClone() {

    const {_Id} = useParams();

    const dispatch = useDispatch()



    const [theftItem, setTheftItem] = useState("");

    const {register, handleSubmit,reset} = useForm(/*{defaultValues:{

        }}*/)


    useEffect( () => {
        dispatch(getSingleTheft({_Id, setTheftItem,reset}))
    }, []);





    const onSubmit = async (data) => {
        const id = theftItem._id
        await dispatch(editTheftClone({data, id}))
    }



    return (
        <section className={css.wrapper}>
            <h2>Edit Theft Clone</h2>
            <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={css.formDataWrapper}>
                    <label htmlFor="licenseNumber">LicenseNumber:</label>
                    <input className={css.formInput}
                           defaultValue={theftItem.licenseNumber}
                           {...register("licenseNumber")}
                           placeholder="license Number"
                    />
                    <label htmlFor="color">Color:</label>
                    <input className={css.formInput}
                           defaultValue={theftItem.color}
                           {...register("color")}
                           placeholder="color"
                    />
                    <label htmlFor="status">Status:</label>
                    <select
                        className={css.formInput}
                        {...register("status")}>
                        <option value="">{theftItem.status}</option>
                        {theftItem.status !== "new" && <option value="new">new</option>}
                        {theftItem.status !== "in progress" && <option value="in progress">in progress</option>}
                        {theftItem.status !== "done" && <option value="done">done</option>}
                    </select>
                    <label htmlFor="type">Type:</label>
                    <select
                        className={css.formInput}
                        {...register("type")}>
                        <option value="">{theftItem.type}</option>
                        {theftItem.type !== "general" && <option value="general">general</option>}
                        {theftItem.type !== "sport" && <option value="sport">sport</option>}
                    </select>
                    <label htmlFor="description">Description:</label>
                    <input className={css.formInput}
                           defaultValue={theftItem.description}
                           {...register("description")}
                           placeholder="description"
                    />
                    <label htmlFor="date">Date:</label>
                    <input className={css.formInput}
                           {...register("date")}
                           placeholder="DD-MM-YYYY"
                    />
                </div>
                <input className={css.formInput} type="submit"/>
            </form>


        </section>

    );
}

export default TheftEditPageClone;