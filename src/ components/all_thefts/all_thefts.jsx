import React, {useEffect} from 'react';
import css from './all_thefts.module.css'
import { useSelector, useDispatch } from 'react-redux'
import AllTheftsDetails from "../all_thefts_ details/all_thefts_ details";
import {fetchListOfThefts} from "../../storage/counterSlise";





function AllThefts() {

 const thefts = useSelector(state => state.bicycles.theftReports)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListOfThefts());
    }, []);

    return (
        <section className={css.wrapper}>
            <ul >
                {thefts.map((theft) => (
                    <AllTheftsDetails
                        key={theft.id}
                        {...theft}
                    />
                ))}
            </ul>
        </section>

    );
}

export default AllThefts;