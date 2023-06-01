import React, {useEffect, useState} from 'react';
import css from './create_an_officer.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {createOfficer} from "../../storage/counterSlise";
import {useForm} from "react-hook-form";


function CreateOfficer() {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        mode: "all"
    })


    const onSubmit = async (data) => {
        console.log(data)
        await dispatch(createOfficer({data}))
    }


    return (
        <section className={css.wrapper}>
            <button onClick={goBack}>Back</button>
            <h2>Create Officer</h2>
            <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={css.formDataWrapper}>
                    <label htmlFor="Email">Email:</label>
                    <input className={css.formInput}
                           defaultValue={""}
                           {...register("email", {
                               required: "this is required",
                               pattern: {
                                   value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                   message: "Invalid email format,enter the email in the format xxxxxx@xxxx.xx"
                               }
                           })}
                           placeholder="Email"
                    />
                    {errors.email && (<p>{errors.email.message}</p>)}

                    <label htmlFor="Password">Password</label>
                    <input className={css.formInput}
                           defaultValue={""}
                           {...register("password", {
                               validate: {
                                   minPasswordValue: (value) => value.trim().length > 0,
                               }
                           })}
                           placeholder="Password"
                    />
                    {errors.password && errors.password.type === "minPasswordValue" && (
                        <p>password must be more than 3 characters</p>
                    )}
                    <label htmlFor="FirstName">FirstName:</label>
                    <input className={css.formInput}
                           defaultValue={""}
                           {...register("firstName")}
                           placeholder="First Name"
                    />

                    <label htmlFor="LastName">LastName:</label>
                    <input className={css.formInput}
                           defaultValue={""}
                           {...register("lastName")}
                           placeholder="Last Name"
                    />

                    <div className={css.checkboxWrapper}>
                        <label>Approved</label>
                        <input
                            type="checkbox"
                            {...register("approved")} />
                    </div>


                </div>
                <input className={css.formInput} type="submit"/>
            </form>


        </section>

    );
}

export default CreateOfficer;