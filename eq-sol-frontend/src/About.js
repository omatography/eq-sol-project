
// Displays About Us info eg Logo and use of app, team members etc.That's it.
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/EQ-Sol Logo.svg'

export default function About() {
    return (
        <div className="container" >
            <div className="row" style={{height:"50px"}} ></div>
            <div className="row justify-content-center align-items-center "  >
                <div className="col-md-4 " >
                    <img src={Logo} className="about-logo" />
                </div>
                <div className="col-md-7 about-box">
                    <p className="home-para">
                        EQ-Sol is a Web Application where the user scans handwritten mathematical equations, and the corresponding solutions are displayed.
                        <br/> <br/>
                        EQ-Sol is a Final year Project by Students of IT batch 2017-21, GEC Barton Hill, Trivandrum.
                        <br/> <br/>
                        Batch #5  <br/>
                        <ul style={{listStyleType:"none", marginLeft:"20px"}}>
                            <li>Akshay TA &nbsp;&nbsp;<a className="fab fa-linkedin list-icon"></a></li>
                            <li>Omkar R&nbsp;&nbsp;<i class="fab fa-linkedin list-icon"></i></li>
                            <li>Karun Krishnan&nbsp;&nbsp;<i class="fab fa-linkedin list-icon"></i></li>
                            <li>Adhithya T&nbsp;&nbsp;<i class="fab fa-linkedin list-icon" ></i></li>
                        </ul>
                        
                    </p>
                </div>
            </div>
        </div>
    )
}
