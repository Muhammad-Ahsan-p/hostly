import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../services/authSerivce";
import "../colors.css";
import "./styles/navbar.css";

class NavBar extends Component {
  state = {
    unwrappedClass: false,
  };

  componentDidMount() {
    this.setState({ user: auth.getUser() });
  }

  render() {
    const { user } = this.state;
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
        <div
          className={
            "menu bgBlue" + (this.state.unwrappedClass ? " unwrap" : "")
          }
        >
          {user && (
            <Link className="menuButton fgWhite" to="/profile">
              {user.name}
            </Link>
          )}
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
          {user && (
            <Link className="menuButton fgWhite" to="/logout">
              Log Out
            </Link>
          )}
          {!user && (
            <React.Fragment>
              <Link className="menuButton fgWhite" to="/login">
                Log In
              </Link>
              <Link className="menuButton fgWhite" to="/register">
                Register
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default NavBar;
