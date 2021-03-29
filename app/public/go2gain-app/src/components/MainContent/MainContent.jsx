import React, { useState } from "react";
import {Link, Route} from "react-router-dom";
import MainPage from "./MainPage/MainPage";

const MainContent = () => {

    return (
        <section className='container main-content'>
            <div className='row'>
                <Route path={`/`} component={MainPage} />
            </div>
        </section>
    );
}

export default MainContent;
