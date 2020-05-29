import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import "../Styles/SecondPageStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Redirect } from "react-router-dom";
import isValid from "../database/state";

const axios = require("axios");
const http = require("http");
const cors = require("http-cors");
export let someValue = [];
class SecondPage extends Component {
  state = { redirect: null };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  sendInfo = async (e) => {
    e.preventDefault();
    let accessed = await this.makeGetRequest();
    let validateValue = false;
    for (let i = 0; i < accessed.length; i++) {
      if (
        accessed[i].email === this.state.email &&
        accessed[i].password === this.state.password
      ) {
        console.log("yeah");
        validateValue = true;
        this.setState({ redirect: "/thirdPage", someValue: true });
        someValue.push(true);
        // document.cookie = `unrealSecretId${accessed[i].id}; max-age=3600`;
        break;
      }
    }
    if (!validateValue) {
      alert("Sorry, lucky next time");
    }
    // console.log("state", accessed)
    // this.setState({ redirect: "/firstPage" });
  };

  async makeGetRequest() {
    // let res = await axios.get('http://127.0.0.1:3001/');

    // let data = res.data;
    // console.log(data);
    // app.use(cors())
    return await fetch("http://127.0.0.1:3001/public")
      .then(async (response) => await response.text())
      .then(async (result) => {
        // document.body.textContent = result
        return await JSON.parse(result).validation;
      });
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
            state: { id: "qwe" },
          }}
        />
      );
    }

    return (
      <div>
        <form className="demoForm">
          <h2>Sign up</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.email
            )}`}
          >
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              required
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.password
            )}`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.formValid}
            onClick={this.sendInfo}
          >
            Sign up
          </button>
        </form>
        <div style={{border: '1px solid black', maxWidth: '450px', borderRadius: '10px', padding: '10px', margin: '15px'}}>
          Cheatcodes:
          <div>email: "sobachka@gav.com", password: "hateKittyKat"</div>
          <div>email: "blatnoy@oh.yes", password: "password"</div>
          <div>email: "freddie@song.com", password: "underPressure"</div>
        </div>
      </div>
    );
  }
}
export default SecondPage;
