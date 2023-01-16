import React from "react";
import { link } from "react-router-dom";

function Header (props) {
    return (
        <div id="header"><h1>Media Store 🎼</h1>
        <div>
        <link to="/" className="Link" id="homelink"><h1>Home</h1></link> 
        <link to="/about" className="Link" id="aboutlink"><h1>About</h1></link> |
        <link to="/basket" className="Link" id="basketlink"><h1>Basket: {props.basketCount} </h1></link>
        </div></div>
    )
}

export default Header;