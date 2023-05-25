import React, {useEffect} from 'react';
import css from './all_thefts.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {fetchListOfThefts} from "../../storage/counterSlise";
import AllTheftsItem from "../all_thefts_item/all_thefts_item";


function AllThefts() {

    const thefts = useSelector(state => state.bicycles.theftReports)
    const dispatch = useDispatch();
    console.log(thefts)

    useEffect( () => {
        dispatch(fetchListOfThefts());
    }, [dispatch]);

    return (
        <section className={css.wrapper}>
            <ul>
                {thefts.map((theft) => (
                    <AllTheftsItem
                        key={theft._id}
                        {...theft}
                    />
                ))}
            </ul>
        </section>

    );
}

export default AllThefts;