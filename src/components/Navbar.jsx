import React from "react";
import reactLogo from '../assets/react.svg'

function Navbar() {
    return (
    <nav>
        <img src={reactLogo} className="logo" alt="React Logo" />
        <h3 className="nav--logo_txt">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
    )
}

export default Navbar