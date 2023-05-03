import React from 'react';
import './App.module.css';
import Header from "./ components/header/header";
import Main from "./ components/main/main";
import Footer from "./ components/footer/footer";
import {Routes, Route} from "react-router-dom";
import css from './App.module.css'
import AllThefts from "./ components/all_thefts/all_thefts";
import Registration from "./ components/registration/registration";
import Authorization from "./ components/authorization/authorization";
import ReportATheft from "./ components/report_a_theft/report_a_theft";
import SingleTheftsPage from "./ components/single_thefts_page/single_thefts_page";
import TheftEditPage from "./ components/theft_edit_page/theft_edit_page";
import TheftEditPageClone from "./ components/theft_edit_page_clone/theft_edit_page_clone";
import ResponsibleOfficers from "./ components/responsible_officers/responsible_officers";
import ResponsibleOfficerDetails from "./ components/responsible_officers_item/responsible_officers_item";


function App() {
    return (
        <div className={css.wrapper}>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="responsible_officers" element={<ResponsibleOfficers/>}/>
                <Route path="responsible_officers/:officerId" element={<ResponsibleOfficerDetails/>}/>
                <Route path="/report_a_theft" element={<ReportATheft/>}/>
                <Route path="/all_thefts" element={<AllThefts/>}/>
                <Route path="/authorization" element={<Authorization/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/thefts/:_Id" element={<SingleTheftsPage/>}/>
                {/*<Route path="/thefts/:_Id/edit" element={<TheftEditPage />} />*/}
                <Route path="/thefts/:_Id/edit" element={<TheftEditPageClone />} />
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
