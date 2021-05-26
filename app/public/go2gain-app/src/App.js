import React from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import {
    BrowserRouter as Router
} from "react-router-dom";

const App = () => (
    <Router>
        <div className='app'>
            <Header />
            <MainContent />
        </div>
    </Router>
);

export default App;
