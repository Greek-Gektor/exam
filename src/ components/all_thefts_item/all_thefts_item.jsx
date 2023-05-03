import React from 'react';
import css from './all_thefts_item.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from "react-router-dom";
import {deleteTheft, formatDate,} from "../../storage/counterSlise";


function AllTheftsItem({color, description, licenseNumber, ownerFullName, status, type,_id,date}) {

    const dispatch = useDispatch()

    const onDeleteTheft = async () => {
        await dispatch(deleteTheft({_id}))
    }


    const theftsDate = new Date(date);
    const uiDate = formatDate(new Date(theftsDate))




    return (
        <>
            <li>
                <span>{ownerFullName}</span>
                <span>{licenseNumber}</span>
                <span>{color}</span>
                <span>{type}</span>
                <span>{status=== "in_progress"?"in progress":status}</span>
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