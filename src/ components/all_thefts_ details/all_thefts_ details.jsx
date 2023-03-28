import React from 'react';
import css from './all_thefts_details.module.css'
import {useSelector, useDispatch} from 'react-redux'


function AllTheftsDetails({createdAt}) {


    return (
        <li>
            <div>{createdAt}</div>
        </li>

    );
}

export default AllTheftsDetails;