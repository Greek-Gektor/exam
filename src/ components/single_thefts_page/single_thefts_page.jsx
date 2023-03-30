import React, {useEffect} from 'react';
import css from './single_thefts_page.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { useParams, Link} from 'react-router-dom'
import AllTheftsDetails from "../all_thefts_item/all_thefts_item";
import {fetchListOfThefts, getSingleTheft, selectTheftById} from "../../storage/counterSlise";


function SingleTheftsPage() {

    const { _Id } = useParams();

    const theft = useSelector((state) => selectTheftById(state, _Id))

    const dispatch = useDispatch()

    const uiTheft = useSelector(state => state.bicycles.singleTheftReport)

    useEffect(() => {
        dispatch(getSingleTheft({theft}))
    }, []);

    return (
        <section className={css.wrapper}>
        <div>{uiTheft._id}</div>
        </section>

    );
}

export default SingleTheftsPage;