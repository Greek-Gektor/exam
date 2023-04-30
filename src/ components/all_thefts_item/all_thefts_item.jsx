import React from 'react';
import css from './all_thefts_item.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from "react-router-dom";
import {deleteTheft, } from "../../storage/counterSlise";


function AllTheftsItem({color, description, licenseNumber, ownerFullName, status, type,_id,date}) {

    const dispatch = useDispatch()

    const onDeleteTheft = async () => {
        await dispatch(deleteTheft({_id}))
    }

    const theftsDate = new Date(date);
    const uiDate = theftsDate.toLocaleDateString('en-GB')




    return (
        <>
            <li>
                <span>{ownerFullName}</span>
                <span>{type}</span>
                <span>{color}</span>
                <span>{licenseNumber}</span>
                <span>{status}</span>
                <span>{description}</span>
                <span>{uiDate}</span>
                <Link to={`/thefts/${_id}`} >
                    <button>View details</button>
                </Link>

                <button onClick={onDeleteTheft}>Delete case</button>
            </li>

        </>


    );
}

export default AllTheftsItem;