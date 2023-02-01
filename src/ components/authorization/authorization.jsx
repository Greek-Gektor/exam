
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {responsibleEmployeesAdded,regNewOfficer} from "../../storage/counterSlise";
import { nanoid } from '@reduxjs/toolkit'

import css from './authorization.module.css'


function Authorization() {

    const [authData, setAuthData] = useState(
        {
            email: '',
            password: ''
        }
    )
    const onEmailChanged = (e) => setAuthData(authData => ({...authData, email: e.target.value}))
    const onPasswordChanged = (e) => setAuthData(authData => ({...authData, password: e.target.value}))
    const onAuthorizationClicked = () => {

    }

    return (
        <section className={css.wrapper}>
            <h2>Authorization</h2>
           {/* {status === 'loading' && <h2>Loading...</h2>}
            {error &&  <h2>An error occured: {error}</h2>}*/}
            <form className={css.authorizationForm}>
                <label htmlFor="postTitle">Email:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={authData.email}
                    onChange={onEmailChanged}
                />
                <label htmlFor="postTitle">Password</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={authData.password}
                    onChange={onPasswordChanged}
                />


                <button className={css.authorizationFormBtn} type="button" onClick={onAuthorizationClicked}>
                    Authorization
                </button>
            </form>
        </section>

    );
}

export default Authorization;