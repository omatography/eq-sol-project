
//Home is Main component where other component resides, what we see as the whole screen.
//Here inside dialog box we have a navbarHome and below section depends on Routes.
//Go to NavbarHome.js and Routes.js
import React from 'react'
import NavbarHome from './NavbarHome'
import Routes from './Routes';
import {BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
    
    return (
        <Router>
            <div className="home-body">
                <div className="home-container">
                    <NavbarHome/>
                    <Routes/>
                </div>
            </div>
        </Router>
    )
}
