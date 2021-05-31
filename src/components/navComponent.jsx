import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../services/authSerivce";
import "./styles/navbar.css";

class NavBar extends Component {
  state = {
    unwrappedClass: false,
    rotate:false,
  };

  componentDidMount() {
    this.setState({ user: auth.getUser() });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="navContainer">
      
          <h1 className="title">Hostly</h1>
          <div
            className={"icon" +(this.state.rotate ? " rotate" : "")}
            onClick={(event) => {
              this.setState({ unwrappedClass: !this.state.unwrappedClass });
              this.setState({ rotate:!this.state.rotate})
            }}
          >
          </div>
        <div
          className={
            "menu" + (this.state.unwrappedClass ? " unwrap" : "")
          }
        >
          {user && (
            <Link className="menuButton" to="/profile">
              {user.name}
            </Link>
          )}
          <Link className="menuButton" to="/home">
            Home
          </Link>
          <Link className="menuButton" to="/chat">
            Chats
          </Link>
          <Link className="menuButton" to="/about">
            About Us
          </Link>
          <Link className="menuButton" to="/contact">
            Contact Us
          </Link>
          {user && (
            <Link className="menuButton" to="/logout">
              Log Out
            </Link>
          )}
          {!user && (
            <React.Fragment>
              <Link className="menuButton" to="/login">
                Log In
              </Link>
              <Link className="menuButton" to="/register">
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
