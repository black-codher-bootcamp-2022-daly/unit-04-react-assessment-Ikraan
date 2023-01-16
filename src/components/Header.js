import React from "react";
import { link } from "react-router-dom";

function Header (props) {
    return (
        <div id="header"><h1>Media Store 🎼</h1>
        <div>
        <link to="/" className="Link" id="homelink">Home</link> |
        <link to="/about" className="Link" id="aboutlink">About</link> |
        <link to="/basket" className="Link" id="basketlink">Basket {props.basketCount} item {props.basketCount===1?"":"s"}</link>
        </div></div>
    )
}

export default Header;