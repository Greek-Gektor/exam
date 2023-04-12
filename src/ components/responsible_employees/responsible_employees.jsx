import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link,Outlet} from "react-router-dom";
import css from './responsible_employees.module.css'


function Employees() {

    const resEmployees = useSelector((state) => state.bicycles.responsibleEmployees)

    return (
        <div className={css.wrapper}>
            <nav>
                {resEmployees.map((employee) => (
                <Link
                    to={`/responsible_employees/${employee.id}`}
                    key={employee.id}
                >
                    <h3 className={css.title}>{employee.firstName}</h3>
                </Link>

            ))}
            </nav>
            <Outlet />
        </div>
    );
}

export default Employees;