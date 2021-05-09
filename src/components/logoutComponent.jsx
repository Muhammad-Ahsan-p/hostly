import React, { Component } from "react";

class Logout extends Component {
  state = {};
  componentDidMount() {
    localStorage.removeItem("token");
    this.props.history.push("/home");
  }
  render() {
    return null;
  }
}

export default Logout;
