import React, { Component } from "react";
import LoginComponent from "../components/loginComponent.jsx";
import "./styles/forms.css";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <div className="formPage">
        <LoginComponent history={this.props.history} />
      </div>
    );
  }
}

export default LoginScreen;
