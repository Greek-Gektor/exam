import React, {useEffect, useState} from 'react';
import css from './single_officer_page.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {getSingleOfficer} from "../../storage/counterSlise";
/*На этой странице должна содержаться детальная информация по сотруднику с возможностью редактирования. Нельзя редактировать поля email и clientId.
Должна быть возможность одобрить сотрудника/снять одобрение (подсказка: для этого можно использовать тип поля checkbox).
URL детальной страницы должен содержать id сотрудника. Пример: localhost:3000/officers/12345 откроет страницу сотрудника с id 12345.*/

function SingleOfficerPage() {

    const {_Id} = useParams();

    const dispatch = useDispatch()

    const [officerItem, setOfficerItem] = useState('');


    useEffect( () => {
         dispatch(getSingleOfficer({_Id, setOfficerItem}))
    }, []);

    /*const theftsDate = new Date(theftItem.date);*/
    /*const uiDate = theftsDate.toLocaleDateString('en-GB')*/
 /*   const uiDate = formatDate(new Date(theftItem.date))*/






    return (
        <section className={css.wrapper}>
            <div className={css.info}>
                <div>{officerItem.firstName}</div>
                <div>{officerItem.lastName}</div>

               {/* <Link to={`/thefts/${_Id}/edit`}>
                    <button>Edit Theft</button>
                </Link>*/}
            </div>
        </section>

    );
}

export default SingleOfficerPage;