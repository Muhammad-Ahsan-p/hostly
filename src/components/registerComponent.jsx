import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

import "../colors.css";
import "./styles/register.css";
import userService from "../services/userService";

class RegisterComponent extends Component {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone_number: "",
    },
    errors: {},
  };

  schema = Joi.object({
    name: Joi.string().min(3).max(255).required().label("Name"),
    email: Joi.string().required().max(255).email().required().label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .max(255)
      .required()
      .label("Password"),
    phone_number: Joi.number()
      .integer()
      .min(10 ** 9)
      .max(10 ** 10 - 1)
      .required()
      .label("Phone Number"),
  });

  validateInput = (data) => {
    const { confirmPassword, ...register_data } = data;
    const result = Joi.validate(register_data, this.schema);

    const errors = {};
    if (!result.error) return {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    const errors = this.validateInput(data);

    this.setState({ data, errors });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validateInput(this.state.data);
    if (!(errors && Object.keys(errors).length === 0)) {
      return alert("Please Resolve Errors in Form");
    }
    // register the user on server.
    const { confirmPassword, ...register_data } = this.state.data;
    try {
      const data = await userService.register(register_data);
      alert("Registered....");
      this.props.history.push("/login");
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
      <div className="registerContainer">
        <div className="register">
          <h1>Register</h1>
          <hr />
          <form className="registerForm" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="registerInput"
              value={data.name}
              name="name"
              onChange={this.handleChange}
              placeholder="Full Name!"
            />
            <span className="validationError">{data.name && errors.name}</span>
            <input
              type="email"
              className="registerInput"
              value={data.email}
              name="email"
              onChange={this.handleChange}
              placeholder="Email!"
            />
            <span className="validationError">
              {data.email && errors.email}
            </span>
            <input
              type="password"
              className="registerInput"
              value={data.password}
              name="password"
              onChange={this.handleChange}
              placeholder="Password!"
            />
            <span className="validationError">
              {data.password && errors.password}
            </span>
            <input
              type="password"
              className="registerInput"
              value={data.confirmPassword}
              name="confirmPassword"
              onChange={this.handleChange}
              placeholder="Confirm Password!"
            />
            <span className="validationError">
              {data.confirmPassword &&
                data.password != data.confirmPassword &&
                "Passwords Don't match..."}
            </span>
            <input
              type="text"
              className="registerInput"
              value={data.phone_number}
              name="phone_number"
              onChange={this.handleChange}
              placeholder="Phone Number"
            />
            <span className="validationError">
              {data.phone_number &&
                errors.phone_number &&
                "Phone Number must be 11 Digits."}
            </span>
            <input
              type="submit"
              value="SIGN UP"
              name="submit"
              className="registerBtn"
            />
          </form>
        </div>
        <Link className="signIn" to="/login">
          SIGN IN NOW
        </Link>
      </div>
    );
  }
}

export default RegisterComponent;
