import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authOfficer, exitAuthOfficerReducer} from "../../storage/counterSlise";
/*import {nanoid} from '@reduxjs/toolkit'*/

import css from './authorization.module.css'


function Authorization() {

    const [authData, setAuthData] = useState(
        {
            email: '',
            password: ''
        }
    )

    const {status, error, authStatus, authOfficerNow} = useSelector(state => state.bicycles);
    const dispatch = useDispatch()

    const onEmailChanged = (e) => setAuthData(authData => ({...authData, email: e.target.value}))
    const onPasswordChanged = (e) => setAuthData(authData => ({...authData, password: e.target.value}))

    const onAuthorizationClicked = async () => {
        setAuthData({
                email: authData.email,
                password: authData.password,
            }
        )
        await dispatch(authOfficer({authData}))
        setAuthData({
            email: '',
            password: ''
        })
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
            <form className={css.authorizationForm}>
                <label htmlFor="Email">Email:</label>
                <input
                    type="text"
                    id="Email"
                    name="Email"
                    value={authData.email}
                    onChange={onEmailChanged}
                />
                <label htmlFor="Password">Password</label>
                <input
                    type="text"
                    id="Password"
                    name="Password"
                    value={authData.password}
                    onChange={onPasswordChanged}
                />


                <button className={css.authorizationFormBtn} type="button" onClick={onAuthorizationClicked}>
                    Authorization
                </button>
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

export default Authorization;