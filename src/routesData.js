import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import About from './components/about.js/index.js';
import Home from './components/home.js';
import Work from './components/works';
import Contacts from './components/works/contacts.js';

const RoutesData = () => {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Works" element={<Work/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
            </Routes>
        </div>
    );
}

export default RoutesData;