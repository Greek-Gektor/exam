import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CreateCaseFromOfficerClone, formatDate} from "../../storage/counterSlise";
import css from './report_a_theft_clone.module.css'
import {useForm} from "react-hook-form";


function ReportATheftClone() {

    const {status, error, authStatus} = useSelector(state => state.bicycles);
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

       await dispatch(CreateCaseFromOfficerClone({data}))
        reset({
            ownerFullName:"",
            licenseNumber:"",
            type:"setType",
            color:"",
            date:"",
            description:""
        })
    }



    return (
        <section className={css.wrapper}>
            <h2>Report a theft clone</h2>
            <form className={css.reportATheftForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={css.formDataWrapper}>
                <label htmlFor="ownerFullName">Owner Full Name:</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("ownerFullName", {
                           validate: {
                               positiveNameValue: (value) => value.trim().length > 0,
                           }
                       })}
                       placeholder="Owner Full Name"
                />
                {errors.ownerFullName && errors.ownerFullName.type === "positiveNameValue" && (
                    <p>this is required</p>
                )}
                <label htmlFor="licenseNumber">License Number:</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("licenseNumber", {
                           validate: {
                               positiveLicenseNumberValue: (value) => value.trim().length > 0,
                           }
                       })}
                       placeholder="license Number"
                />
                {errors.licenseNumber && errors.licenseNumber.type === "positiveLicenseNumberValue" && (
                    <p>this is required</p>
                )}
                <label htmlFor="type">Type:</label>
                <select
                    className={css.formInput}
                    {...register("type",
                        {
                            validate: {
                                positiveType: (value) => value !== "setType",
                            }
                        })}>
                    <option value="setType">Set type</option>
                    <option value="general">general</option>
                    <option value="sport">sport</option>
                </select>
                {errors.type && errors.type.type === "positiveType" && (
                    <p>Select type</p>
                )}
                <label htmlFor="color">Color:</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("color")}
                       placeholder="color"
                />
                <label htmlFor="date">Date:</label>
                <input className={css.formInput}
                       defaultValue={""}
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
                <label htmlFor="description">Description:</label>
                <input className={css.formInput}
                       defaultValue={""}
                       {...register("description")}
                       placeholder="description"
                />
                </div>
                <input className={css.formInput}  type="submit" />
            </form>

        </section>

    );
}

export default ReportATheftClone;