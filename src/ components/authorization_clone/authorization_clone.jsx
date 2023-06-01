import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authOfficer, exitAuthOfficerReducer, regNewOfficer} from "../../storage/counterSlise";


import css from './authorization_clone.module.css'
import {useForm} from "react-hook-form";


function AuthorizationClone() {


    const {status, error, authStatus, authOfficerNow} = useSelector(state => state.bicycles);
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
        await dispatch(authOfficer({data}))
    }

    const onExitAuthorizationClicked = async () => {

        await dispatch(exitAuthOfficerReducer())

    }


    return (
        <section className={css.wrapper}>
            <h2>Authorization</h2>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            {authStatus === false &&
            <form className={css.authorizationForm} onSubmit={handleSubmit(onSubmit)}>
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


                <input className={css.formInput}  type="submit" value="Authorization" />
            </form>
            }
            {authStatus === true &&
            <>
                <h2>Авторизованный сотрудник : {authOfficerNow}</h2>
                <button className={css.authorizationFormBtn} type="button" onClick={onExitAuthorizationClicked}>
                    Exit
                </button>
            </>

            }

        </section>

    );
}

export default AuthorizationClone;