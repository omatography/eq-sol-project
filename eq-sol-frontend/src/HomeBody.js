
//the module which appears at starting, shows heading and two options ie, capture pic using Webcam and Upload.
//when camera click, HomeBody navigates to Camera.js, visit it.
// when upload click, a Modal ie, a dialog box appears which displays Upload.js, visit it.
//also used wc-typed-js module for typing animation
import ReactTypingEffect from 'react-typing-effect';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal } from 'reactstrap';
import camera from "./images/camera.png"
import upload from "./images/upload.png"
import Upload from './Upload';

export default function HomeBody() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="container">
            {/* Heading */}
            <div className="row mt-3">
                <p className="home-heading ">
                    <ReactTypingEffect
                        text={["Hello, Students", "Hola, Estudiantes", "Bonjours les étudiants"]}
                        Speed="100ms"
                        eraseSpeed="100ms"
                        eraseDelay="100ms"
                        typingDelay="100ms"
                        cursor=" "
                    />
                    <p className="home-para">Let's start solving the equations.</p>
                </p> 
            </div>
            {/* The two option boxes, webcam and upload */}
            <div className="row justify-content-center">
                <div className="col-4 card-box">
                    <div className="card-content">
                        <img src={camera} className="home-icon" /> <br/>  <br/>
                        <Link to="/camera">
                            <button className="btn btn-home" style={{position:"relative",left:"50%",
                            transform: "translateX(-50%)"}}>Capture using Webcam</button>
                        </Link>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4 card-box">
                    <div className="card-content">
                        <img src={upload} className="home-icon" /> <br/> <br/>
                        <Link onClick={toggle}>
                            <button className="btn btn-home" style={{position:"relative",left:"50%",
                            transform: "translateX(-50%)"}}>Upload the picture</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal when upload triggers */}
            <Modal isOpen={modal} toggle={toggle} centered size="xl" >
                <Upload toggle={toggle}/>
            </Modal>
        </div>
    )
}

