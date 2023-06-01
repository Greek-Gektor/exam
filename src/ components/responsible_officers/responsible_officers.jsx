import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link,Outlet} from "react-router-dom";
import css from './responsible_officers.module.css'
import {fetchListOfOfficers} from "../../storage/counterSlise";
import ResponsibleOfficersItem from "../responsible_officers_item/responsible_officers_item";


function ResponsibleOfficers() {

    const responsibleOfficers = useSelector((state) => state.bicycles.responsibleOfficers)
    const dispatch = useDispatch();
    console.log(responsibleOfficers)

    useEffect( () => {
        dispatch(fetchListOfOfficers());
    }, [dispatch]);

    return (
        <section className={css.wrapper}>
            <ul>
                {responsibleOfficers.map((officer) => (
                    <ResponsibleOfficersItem
                        key={officer._id}
                        {...officer}
                    />
                ))}
            </ul>
            <div className={css.adderWrapper}>
                <span>Create an officer:</span>
                <Link to={`/responsible_officers/addOfficer`} >
                    <button>Add an officer</button>
                </Link>
            </div>

        </section>
    );
}

export default ResponsibleOfficers;