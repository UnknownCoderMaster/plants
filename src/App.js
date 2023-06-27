import React from 'react';
import {Routes, Route} from "react-router";
import Home from "./home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import {useTranslation} from "react-i18next";

function App(props) {

    const {t} = useTranslation();

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/aboutUs"} element={<AboutUs/>}/>
            <Route path={"/services"} element={<Services/>}/>
        </Routes>
    );
}

export default App;