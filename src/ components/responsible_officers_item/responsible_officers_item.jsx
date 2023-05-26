import React from 'react';

import {useParams, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import css from './responsible_officers_item.module.css'
import {deleteOfficer} from "../../storage/counterSlise";



function ResponsibleOfficersItem({_id,email,firstName,lastName,approved}) {


    const dispatch = useDispatch()

    const onDeleteOfficer = async () => {
        await dispatch(deleteOfficer({_id}))
    }



    return (
        <>
            <li>
                <span>{firstName}</span>
                <span>{lastName}</span>
                <span>{approved ? "approved officer":"not approved officer"}</span>
                <Link to={`/responsible_officers/${_id}`} >
                    <button>View details</button>
                </Link>

                <button onClick={onDeleteOfficer}>Delete officer</button>
            </li>

        </>
    );
}


export default ResponsibleOfficersItem;