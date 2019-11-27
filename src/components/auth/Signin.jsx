import React, { Component } from "react";
import classes from "./auth.css";
import axios from "../../api";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
  };

  render() {
    console.log(this.state);
    return (
      <div className="Auth_Container" style={classes.Auth_Container}>
        <div className="Form_auth" style={classes.Form_auth}>
          <h1>Signin Form</h1>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              onChange={this.handleChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
