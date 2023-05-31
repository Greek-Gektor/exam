import React, {useEffect, useState} from 'react';
import css from './officer_edit_page.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams,useNavigate} from 'react-router-dom'
import {editOfficer, getSingleOfficer} from "../../storage/counterSlise";
import {useForm} from "react-hook-form";



function OfficerEditPage() {

/*    На этой странице должна содержаться детальная информация по сотруднику с возможностью редактирования.
        Нельзя редактировать поля email и clientId. Должна быть возможность одобрить сотрудника/снять одобрение
    (подсказка: для этого можно использовать тип поля checkbox).*/

    const {_Id} = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);


    const dispatch = useDispatch()

    const [officerItem, setOfficerItem] = useState("");

    useEffect(() => {
        dispatch(getSingleOfficer({_Id, setOfficerItem,reset}))
    }, []);


    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        mode:"all"
    })



    const onSubmit = async (data) => {
        console.log(data)
        const id = officerItem._id
        await dispatch(editOfficer({ data, id}))
        goBack()
    }


    return (
        <section className={css.wrapper}>
            <h2>Edit Officer</h2>
            <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={css.formDataWrapper}>
                    <label htmlFor="firstName">First Name:</label>
                    <input className={css.formInput}
                           defaultValue={officerItem.firstName}
                           {...register("firstName")}
                           placeholder="First Name"
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input className={css.formInput}
                           defaultValue={officerItem.lastName}
                           {...register("lastName")}
                           placeholder="Last Name"
                    />

                    {/*<label htmlFor="approved">Approved:</label>
                    <select
                        className={css.formInput}
                        {...register("approved")}>
                        <option value={OfficerApproval}>{OfficerApproval}</option>
                        {OfficerApproval !== "officer not approved" && <option value ={b} >officer not approved</option>}
                        {OfficerApproval !== "officer approved" && <option value ={a} >officer approved</option>}
                    </select>*/}
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

export default OfficerEditPage;