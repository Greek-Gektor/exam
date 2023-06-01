import React from 'react';
import './App.module.css';
import Header from "./ components/header/header";
import Main from "./ components/main/main";
import Footer from "./ components/footer/footer";
import {Routes, Route} from "react-router-dom";
import css from './App.module.css'
import AllThefts from "./ components/all_thefts/all_thefts";
import SingleTheftsPage from "./ components/single_thefts_page/single_thefts_page";
import TheftEditPageClone from "./ components/theft_edit_page_clone/theft_edit_page_clone";
import ResponsibleOfficers from "./ components/responsible_officers/responsible_officers";
import SingleOfficerPage from "./ components/single_officer_page/single_officer_page";
import ReportATheftClone from "./ components/report_a_theft_clone/report_a_theft_clone";
import OfficerEditPage from "./ components/officer_edit_page/officer_edit_page";
import RegistrationClone from "./ components/registration_clone/registration_clone";
import AuthorizationClone from "./ components/authorization_clone/authorization_clone";
import CreateOfficer from "./ components/create_an_officer/create_an_officer";


function App() {
    return (
        <div className={css.wrapper}>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="responsible_officers" element={<ResponsibleOfficers/>}/>
                <Route path="responsible_officers/:_Id" element={<SingleOfficerPage/>}/>
                <Route path="/responsible_officers/:_Id/edit" element={<OfficerEditPage />} />
                {/*<Route path="/report_a_theft" element={<ReportATheft/>}/>*/}
                <Route path="/report_a_theft" element={<ReportATheftClone/>}/>
                <Route path="/all_thefts" element={<AllThefts/>}/>
                <Route path="/thefts/:_Id" element={<SingleTheftsPage/>}/>
                <Route path="/thefts/:_Id/edit" element={<TheftEditPageClone />} />
                {/*<Route path="/authorization" element={<Authorization/>}/>*/}
                <Route path="/authorization" element={<AuthorizationClone/>}/>
                {/*<Route path="/registration" element={<Registration/>}/>*/}
                <Route path="/registration" element={<RegistrationClone/>}/>
                {/*<Route path="/thefts/:_Id/edit" element={<TheftEditPage />} />*/}
                <Route path="/responsible_officers/addOfficer" element={<CreateOfficer/>}/>
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
