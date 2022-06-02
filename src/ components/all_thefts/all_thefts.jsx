import React from 'react';
import css from './all_thefts.module.css'
import { useSelector, useDispatch } from 'react-redux'





function AllThefts() {
    const thefts = useSelector((state) => state.counter)


    return (
        <div >
            {thefts.theftReports[0].description}
        </div>
    );
}

export default AllThefts;