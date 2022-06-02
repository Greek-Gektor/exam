import React from 'react';

import {useParams, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import css from './responsible_employees_ details.module.css'



function ResponsibleEmployeesDetails() {

    const resEmployees = useSelector((state) => state.counter.responsibleEmployees)

    const params = useParams();

    const employeeId = parseInt(params.employeesId, 10)

    const employee = resEmployees.find(task => task.id === employeeId)



    return (
        <div>
            {employee.firstName}
        </div>
    );
}


export default ResponsibleEmployeesDetails;