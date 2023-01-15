import React from "react";
import { link } from "react-router-dom";

function Header (props) {
    console.log(props)
    return (
        <div className="header">
            <h1>Media Store 🎼</h1>
        <div className="nav">
        <link to="/" className="Link" id="homelink">Home</link>|
        <link to="/about" className="Link" id="aboutlink">About</link>|
        <link to="/basket" className="Link" id="basketlink">Basket: ({props.itemCount})</link>
        </div></div>
    )
}

export default Header;