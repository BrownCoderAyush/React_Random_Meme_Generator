import React from "react";
import logo from '../images/troll-face.png';
import '../css/navbar.css'
export default function navbar(){
    return (
        <header className="header-section">
            <div className="header-main">
            <img className="nav-logo" src={logo} alt="logo" />
            <h2>Meme Generator</h2>
            </div>
            <h4 className="header-project">React Project 2</h4>

        </header>
    )
}