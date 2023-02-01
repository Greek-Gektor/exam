import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {responsibleEmployeesAdded, regNewOfficer} from "../../storage/counterSlise";
import {nanoid} from '@reduxjs/toolkit'

import css from './registration.module.css'


function Registration() {


    const {status, error} = useSelector(state => state.bicycles);
    /* const [title, setTitle] = useState('')
     const [content, setContent] = useState('')*/



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

    const onSavePostClicked = () => {

        if (officer.email) {
            setOfficer(
                {
                    email: officer.email,
                    password: officer.password,
                    clientId: officer.clientId,
                    firstName: officer.firstName,
                    lastName: officer.lastName,
                    approved: true,

                }
            )

            dispatch(regNewOfficer({officer}))

            setOfficer({
                email: '',
                password: '',
                clientId: '',
                firstName: '',
                lastName: '',
                approved: '',
            })

        }
        console.log(officer)
    }

    return (
        <section className={css.wrapper}>
            <h2>Registration</h2>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <form className={css.registrationForm}>
                <label htmlFor="postTitle">Email:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={officer.email}
                    onChange={onEmailChanged}
                />
                <label htmlFor="postTitle">Password</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={officer.password}
                    onChange={onPasswordChanged}
                />
                <label htmlFor="postTitle">Client ID</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={officer.clientId}
                    onChange={onClientIdChanged}
                />

                <label htmlFor="postTitle">FirstName:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={officer.firstName}
                    onChange={onFirstNameChanged}
                />
                <label htmlFor="postTitle">LastName:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
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