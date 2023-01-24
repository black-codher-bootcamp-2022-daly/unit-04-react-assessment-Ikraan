import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log(props.basketCount);
  return (
    <div id="header">
        <h1>Media Store <span id="icon">🎼</span> <br></br></h1>
        <div id="nav">
          <Link to="/"> Home </Link> |
          <Link to="/about"> About </Link> |
          <Link to="/basket" id="basketlink"> Basket: {props.basketCount} item{props.basketCount===1?"":"s"}</Link>
        </div>
    </div>
  );
}

export default Header;
