import React from 'react';
import css from './all_thefts_item.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from "react-router-dom";


function AllTheftsItem({color, description, licenseNumber, ownerFullName, status, type,_id}) {


    return (
        <>
            <li>
                <span>{ownerFullName}</span>
                <span>{type}</span>
                <span>{color}</span>
                <span>{licenseNumber}</span>
                <span>{status}</span>
                <Link to={`/thefts/${_id}`} >
                    <button>View details</button>
                </Link>

                <button>Delete case</button>
            </li>

        </>


    );
}

export default AllTheftsItem;