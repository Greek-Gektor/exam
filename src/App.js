import React from 'react';
import './App.module.css';
import Header from "./ components/header/header";
import Main from "./ components/main/main";
import Footer from "./ components/footer/footer";
import {Routes, Route} from "react-router-dom";
import Employees from "./ components/responsible_employees/responsible_employees";
import css from './App.module.css'
import AllThefts from "./ components/all_thefts/all_thefts";
import ResponsibleEmployeesDetails from "./ components/responsible_employees_ details/responsible_employees_ details";
import Registration from "./ components/registration/registration";
import Authorization from "./ components/authorization/authorization";


function App() {
    return (
        <div className={css.wrapper}>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="responsible_employees" element={<Employees/>}/>
                <Route path="responsible_employees/:employeesId" element={<ResponsibleEmployeesDetails/>}/>



                <Route path="/all_thefts" element={<AllThefts/>}/>
                <Route path="/authorization" element={<Authorization/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />

            </Routes>
            <Footer/>
        </div>
    );


}

export default App;
