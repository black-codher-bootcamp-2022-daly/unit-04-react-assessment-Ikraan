import React from "react";
import { link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
        <div>
        <link to="/" id="homelink"> Home</link>|
        <link to="/about" id="aboutlink">About</link>|
        <link to="/basket" id="basketlink">Basket {props.itemCount} </link>
        </div></div>
    )
}

export default Header;