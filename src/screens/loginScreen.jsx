import React, { Component } from "react";
import LoginComponent from "../components/loginComponent.jsx";
import "./styles/styles.css";
import "../colors.css";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <div className="center bgBlue">
        <LoginComponent history={this.props.history} />
      </div>
    );
  }
}

export default LoginScreen;
