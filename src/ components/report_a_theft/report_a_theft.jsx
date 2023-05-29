/*
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CreateCaseFromOfficer,CreateCaseFromClient} from "../../storage/counterSlise";


import css from './report_a_theft.module.css'


function ReportATheft() {

    const {status, error, authStatus} = useSelector(state => state.bicycles);

    const [theftCase, setTheftCase] = useState(
        {
            ownerFullName: '',
            licenseNumber: '',
            type: '',
            color: '',
            date: '',
            description: ''
        }
    )

    const dispatch = useDispatch()

    const onOwnerFullNameChanged = (e) => setTheftCase(theftCase => ({...theftCase, ownerFullName: e.target.value}))
    const onLicenseNumberChanged = (e) => setTheftCase(theftCase => ({...theftCase, licenseNumber: e.target.value}))
    const onSelectChanged = (e) => setTheftCase(theftCase => ({...theftCase, type: e.target.value}))
    const onColorChanged = (e) => setTheftCase(theftCase => ({...theftCase, color: e.target.value}))
    const onDateChanged = (e) => setTheftCase(theftCase => ({...theftCase, date: e.target.value}))
    const onDescriptionChanged = (e) => setTheftCase(theftCase => ({...theftCase, description: e.target.value}))


    const onOfficerReportClicked = async () => {
        setTheftCase({
            ownerFullName: theftCase.ownerFullName,
            licenseNumber: theftCase.licenseNumber,
            type: theftCase.type,
            color: theftCase.color,
            date: theftCase.date,
            description: theftCase.description
            }
        )
        await dispatch(CreateCaseFromOfficer({theftCase}))
        setTheftCase({
            ownerFullName: '',
            licenseNumber: '',
            type: '',
            color: '',
            date: '',
            description: ''
        })
    }

    const onClientReportClicked = async () => {
        setTheftCase({
                ownerFullName: theftCase.ownerFullName,
                licenseNumber: theftCase.licenseNumber,
                type: theftCase.type,
                color: theftCase.color,
                date: theftCase.date,
                description: theftCase.description
            }
        )
        await dispatch(CreateCaseFromClient({theftCase}))
        setTheftCase({
            ownerFullName: '',
            licenseNumber: '',
            type: '',
            color: '',
            date: '',
            description: ''
        })
    }


    return (
        <section className={css.wrapper}>
            <h2>Report a theft</h2>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <form className={css.reportATheftForm}>
                <label htmlFor="ownerFullName">Owner Full Name:</label>
                <input
                    type="text"
                    id="ownerFullName"
                    name="ownerFullName"
                    value={theftCase.ownerFullName}
                    onChange={onOwnerFullNameChanged}
                />
                <label htmlFor="licenseNumber">License Number:</label>
                <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    value={theftCase.licenseNumber}
                    onChange={onLicenseNumberChanged}
                />
                <label htmlFor="licenseNumber">Type:</label>
                <select className={css.selectValue} value={theftCase.type} onChange={onSelectChanged}>
                    <option value="setType" selected>Set type</option>
                    <option value="general">general</option>
                    <option value="sport">sport</option>
                </select>
                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    value={theftCase.color}
                    onChange={onColorChanged}
                />
                <label htmlFor="date">Date:</label>
                <input
                    type="text"
                    id="date"
                    name="date"
                    value={theftCase.date}
                    onChange={onDateChanged}
                />
                <label htmlFor="date">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={theftCase.description}
                    onChange={onDescriptionChanged}
                />

                {authStatus === true &&
                <button className={css.authorizationFormBtn} type="button" onClick={onOfficerReportClicked}>
                    Officer Report
                </button>
                }
                {authStatus === false &&
                <button className={css.authorizationFormBtn} type="button" onClick={onClientReportClicked}>
                    Public Report
                </button>
                }

            </form>

        </section>

    );
}

export default ReportATheft;*/
