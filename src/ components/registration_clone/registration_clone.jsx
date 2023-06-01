import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { regNewOfficer} from "../../storage/counterSlise";
import css from './registration_clone.module.css'
import {useForm} from "react-hook-form";


function RegistrationClone() {


    const {status, error} = useSelector(state => state.bicycles);


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
            await dispatch(regNewOfficer({data}))
    }


/*
<input className={css.formInput}
           defaultValue={""}
           {...register("lastName", {
               validate: {
                   positiveLastNameValue: (value) => value.trim().length > 0,
               }
           })}
           placeholder="Last Name"
    />
    {errors.lastName && errors.lastName.type === "positiveLastNameValue" && (
        <p>this is required</p>
    )}
*/

    return (
        <section className={css.wrapper}>
            <h2>Registration</h2>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <form className={css.registrationForm} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="Email">Email:</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("email", {
                           validate: {
                               positiveEmailValue: (value) => value.trim().length > 0,
                           }
                       })}
                       placeholder="Email"
                />
                {errors.email && errors.email.type === "positiveEmailValue" && (
                    <p>this is required</p>
                )}
                <label htmlFor="Password">Password</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("password", {
                           validate: {
                               minPasswordValue: (value) =>  value.trim().length > 3 ,
                               maxPasswordValue: (value) =>  value.trim().length < 12 ,
                           }
                       })}
                       placeholder="Password"
                />
                {errors.password && errors.password.type === "minPasswordValue" && (
                    <p>password must be more than 3 characters</p>
                )}
                {errors.password && errors.password.type === "maxPasswordValue" && (
                    <p>password must be less than 12 characters</p>
                )}
                <label htmlFor="Client ID">Client ID</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("clientId", {
                           validate: {
                               positiveClientIdValue: (value) => value.trim().length > 0,
                           }
                       })}
                       placeholder="Client Id"
                />
                {errors.clientId && errors.clientId.type === "positiveClientIdValue" && (
                    <p>this is required</p>
                )}

                <label htmlFor="FirstName">FirstName:</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("firstName", {
                           validate: {
                               positiveFirstNameValue: (value) => value.trim().length > 0,
                           }
                       })}
                       placeholder="First Name"
                />
                {errors.firstName && errors.firstName.type === "positiveFirstNameValue" && (
                    <p>this is required</p>
                )}
                <label htmlFor="LastName">LastName:</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("lastName", {
                           validate: {
                               positiveLastNameValue: (value) => value.trim().length > 0,
                           }
                       })}
                       placeholder="Last Name"
                />
                {errors.lastName && errors.lastName.type === "positiveLastNameValue" && (
                    <p>this is required</p>
                )}

                <input className={css.formInput}  type="submit" />
            </form>
        </section>

    );
}

export default RegistrationClone;