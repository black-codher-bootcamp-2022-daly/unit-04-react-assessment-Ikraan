import React from "react";
import { link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header" id="nav"><h1>The Music Store 🎼</h1>
        <div>
        <link to="/" className="Link" id="homelink"><em>Home</em></link>|
        <link to="/about" className="Link" id="aboutlink"><em>About</em></link>|
        <link to="/basket" className="Link" id="basketlink"><em>Basket {props.itemCount}</em></link>
        </div></div>
    )
}

export default Header;