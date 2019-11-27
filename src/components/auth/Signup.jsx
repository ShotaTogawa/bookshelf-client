import React, { Component } from "react";
import classes from "./auth.css";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };
  render() {
    return (
      <div className="Form_auth" style={classes.Form_auth}>
        <h1>Signup Form</h1>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="password" name="password" placeholder="Your Password" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Signup;
