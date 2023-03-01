import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { regNewOfficer} from "../../storage/counterSlise";
/*import {nanoid} from '@reduxjs/toolkit'*/

import css from './registration.module.css'


function Registration() {


    const {status, error} = useSelector(state => state.bicycles);


    const dispatch = useDispatch()

    const [officer, setOfficer] = useState(
        {
            email: '',
            password: '',
            clientId: '',
            firstName: '',
            lastName: '',
            approved: '',
        }
    )


    const onEmailChanged = (e) => setOfficer(officer => ({...officer, email: e.target.value}))
    const onPasswordChanged = (e) => setOfficer(officer => ({...officer, password: e.target.value}))
    const onClientIdChanged = (e) => setOfficer(officer => ({...officer, clientId: e.target.value}))
    const onFirstNameChanged = (e) => setOfficer(officer => ({...officer, firstName: e.target.value}))
    const onLastNameChanged = (e) => setOfficer(officer => ({...officer, lastName: e.target.value}))

    const onSavePostClicked = async () => {

        if (officer.email) {
            setOfficer({
                    email: officer.email,
                    password: officer.password,
                    clientId: officer.clientId,
                    firstName: officer.firstName,
                    lastName: officer.lastName,
                    approved: true,

                }
            )

            await dispatch(regNewOfficer({officer}))

            setOfficer({
                email: '',
                password: '',
                clientId: '',
                firstName: '',
                lastName: '',
                approved: '',
            })

        }
    }

    return (
        <section className={css.wrapper}>
            <h2>Registration</h2>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <form className={css.registrationForm}>
                <label htmlFor="Email">Email:</label>
                <input
                    type="text"
                    id="Email"
                    name="Email"
                    value={officer.email}
                    onChange={onEmailChanged}
                />
                <label htmlFor="Password">Password</label>
                <input
                    type="text"
                    id="Password"
                    name="Password"
                    value={officer.password}
                    onChange={onPasswordChanged}
                />
                <label htmlFor="Client ID">Client ID</label>
                <input
                    type="text"
                    id="Client ID"
                    name="Client ID"
                    value={officer.clientId}
                    onChange={onClientIdChanged}
                />

                <label htmlFor="FirstName">FirstName:</label>
                <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    value={officer.firstName}
                    onChange={onFirstNameChanged}
                />
                <label htmlFor="LastName">LastName:</label>
                <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    value={officer.lastName}
                    onChange={onLastNameChanged}
                />

                <button className={css.registrationFormBtn} type="button" onClick={onSavePostClicked}>
                    Registration
                </button>
            </form>
        </section>

    );
}

export default Registration;