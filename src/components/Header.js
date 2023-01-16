import React from "react";
import { link } from "react-router-dom";


function Header(props) {
    return (
      <div id="navi">
        <h1 className="title"> Media Store 🎼</h1>
        <div>
          <Link className="link" to="/" id="homelink">
            {" "}
            <h4>Home</h4>
          </Link>
        </div>
        <div>
          <Link className="link" to="/about" id="aboutlink">
            <h4>About </h4>
          </Link>
        </div>
        <div>
          <Link className="link" to="/basket" id="basketlink">
            <h4>Basket:{props.itemCount}</h4>
          </Link>
        </div>
      </div>
    );
  }
export default Header;