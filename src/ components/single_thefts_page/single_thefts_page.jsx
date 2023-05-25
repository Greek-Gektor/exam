import React, {useEffect, useState} from 'react';
import css from './single_thefts_page.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {formatDate, getSingleTheft} from "../../storage/counterSlise";


function SingleTheftsPage() {

    const {_Id} = useParams();


    const dispatch = useDispatch()

    const [theftItem, setTheftItem] = useState('');


    useEffect(() => {
        dispatch(getSingleTheft({_Id, setTheftItem}))

    }, []);

 /*   const theftsDate = new Date(theftItem.date);*/
    /*const uiDate = theftsDate.toLocaleDateString('en-GB')*/
    const uiDate = formatDate(new Date(theftItem.date))






    return (
        <section className={css.wrapper}>
            <div className={css.info}>
                <div>{theftItem.ownerFullName}</div>
                <div>{theftItem.licenseNumber}</div>
                <div>{theftItem.color}</div>
                <div>{theftItem.status==="in_progress"?"in progress":theftItem.status}</div>
                <div>{theftItem.type}</div>
                <div>{theftItem.description}</div>
                <div>{theftItem.resolution}</div>
                <div>{uiDate}</div>
                <Link to={`/thefts/${_Id}/edit`}>
                    <button>Edit Theft</button>
                </Link>
            </div>
        </section>

    );
}

export default SingleTheftsPage;