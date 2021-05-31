import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

import authService from "../services/authSerivce";
import "./styles/login.css";

class LoginComponent extends Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string().required().max(255).email().required().label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .max(255)
      .required()
      .label("Password"),
  });

  validateInput = (data) => {
    const result = Joi.validate(data, this.schema);
    const errors = {};
    if (!result.error) return {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    // sync the state with the form
    const { data } = this.state;
    data[input.name] = input.value;
    this.setState({ data });

    const errors = this.validateInput(data);
    this.setState({ errors });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validateInput(this.state.data);
    if (!(errors && Object.keys(errors).length === 0)) {
      return alert("Please Resolve Errors in Form");
    }
    try {
      await authService.login(data.email, data.password);
      this.props.history.push("/home");
    } catch (ex) {
      if (ex && ex.response.status === 400) {
        const { errors } = this.state;
        errors.email = ex.response.data;
        this.setState({ errors });
        alert(ex.response.data);
      }
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container">
        <div className="loginContainer">
          <h1>Login</h1>
          <hr />
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Email!"
              className="loginInput"
              name="email"
              value={data.email}
              onChange={this.handleChange}
            />
            <span className="validationError">
              {data.email && errors.email}
            </span>
            <input
              type="password"
              placeholder="Password!"
              className="loginInput"
              name="password"
              value={data.password}
              onChange={this.handleChange}
            />
            <span className="validationError">
              {data.password && errors.password}
            </span>

            <input
              type="submit"
              value="Sign In"
              className="loginBtn"
            />
          </form>
          <Link className="forget" to="">
            Forget Password
          </Link>
          <Link className="signUp" to="/register">
            SIGN UP NOW
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
