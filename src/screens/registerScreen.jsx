import React, { Component } from "react";
import RegisterComponent from "../components/registerComponent";

import "./styles/forms.css";

class RegisterScreen extends Component {
  state = {};
  render() {
    return (
      <div className="formPage">
        <RegisterComponent {...this.props} />
      </div>
    );
  }
}

export default RegisterScreen;
