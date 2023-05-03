import React from 'react';

import {useParams, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import css from './responsible_officers_item.module.css'
import {deleteTheft, formatDate} from "../../storage/counterSlise";



function ResponsibleOfficersItem() {

    const dispatch = useDispatch()

    const onDeleteTheft = async () => {
        await dispatch(deleteTheft({_id}))
    }


    const theftsDate = new Date(date);
    const uiDate = formatDate(new Date(theftsDate))



    return (
        <div>
            {employee.firstName}
        </div>
    );
}


export default ResponsibleOfficersItem;