import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../colors.css";
import "./styles/navbar.css";

class NavBar extends Component {
  state = {
    unwrappedClass: false,
  };
  render() {
    return (
      <div className="bgBlue navContainer">
        <div className="banner">
          <h1 className="fgWhite fontFamily title">Hostly</h1>
          <div
            className="icon"
            onClick={(event) => {
              this.setState({ unwrappedClass: !this.state.unwrappedClass });
            }}
          ></div>
        </div>
        <div className={
            "menu bgBlue" + (this.state.unwrappedClass ? " unwrap" : "")
          }>
          <Link className="menuButton fgWhite" to="/home">
            Home
          </Link>
          <Link className="menuButton fgWhite" to="/chat">
            Chats
          </Link>
          <Link className="menuButton fgWhite" to="/about">
            About Us
          </Link>
          <Link className="menuButton fgWhite" to="/contact">
            Contact Us
          </Link>
          <Link className="menuButton fgWhite" to="/login">
            Sign Out
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
