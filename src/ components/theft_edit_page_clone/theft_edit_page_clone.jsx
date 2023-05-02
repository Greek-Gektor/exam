import React, {useEffect, useState} from 'react';
import css from './theft_edit_page_clone.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams,useNavigate} from 'react-router-dom'
import {editTheft, editTheftClone, getSingleTheft} from "../../storage/counterSlise";
import {useForm} from "react-hook-form";



function TheftEditPageClone() {

    const {_Id} = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const dispatch = useDispatch()


    const [theftItem, setTheftItem] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        mode:"all"
    })


    useEffect(() => {
        dispatch(getSingleTheft({_Id, setTheftItem, reset}))
    }, []);


    const onSubmit = async (data) => {
        const id = theftItem._id
        await dispatch(editTheftClone({theftItem, data, id}))
        goBack()
    }


    return (
        <section className={css.wrapper}>
            <h2>Edit Theft Clone</h2>
            <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={css.formDataWrapper}>
                    <label htmlFor="ownerFullName">Owner Full Name:</label>
                    <input className={css.formInput}
                           defaultValue={theftItem.ownerFullName}
                           {...register("ownerFullName",{
                               validate: {
                                   positiveNameValue: (value) => value.trim().length > 0,
                               }
                           })}
                           placeholder="Owner Full Name"
                    />
                    {errors.ownerFullName && errors.ownerFullName.type === "positiveNameValue" && (
                        <p>this is required</p>
                    )}

                    <label htmlFor="licenseNumber">LicenseNumber:</label>
                    <input className={css.formInput}
                           defaultValue={theftItem.licenseNumber}
                           {...register("licenseNumber",{
                               validate: {
                                   positiveLicenseNumberValue: (value) => value.trim().length > 0,
                               }
                           })}
                           placeholder="license Number"
                    />
                    {errors.licenseNumber && errors.licenseNumber.type === "positiveLicenseNumberValue" && (
                        <p>this is required</p>
                    )}
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
                        <option
                            value={theftItem.status}>{theftItem.status === "in_progress" ? "in progress" : theftItem.status}</option>
                        {theftItem.status !== "new" && <option value="new">new</option>}
                        {theftItem.status !== "in_progress" && <option value="in_progress">in progress</option>}
                        {theftItem.status !== "done" && <option value="done">done</option>}
                    </select>
                    <label htmlFor="type">Type:</label>
                    <select
                        className={css.formInput}
                        {...register("type")}>
                        <option value={theftItem.type}>{theftItem.type}</option>
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
                           {...register("date",{
                               required: "this is required",
                               pattern: {
                               value: /\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                               message: "Invalid date format,enter the date in the format YYYY-MM-DD"
                           }
                           })}
                           placeholder="YYYY-MM-DD"
                    />
                    {errors.date && <p>{errors.date.message}</p>}

                </div>
                <input className={css.formInput} type="submit"/>
            </form>


        </section>

    );
}

export default TheftEditPageClone;