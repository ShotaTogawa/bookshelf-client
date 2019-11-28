import React, { Component } from "react";
import classes from "./auth.css";
import { connect } from "react-redux";

import { signup } from "../../actions";
import Spinner from "../../spinner/Spinner";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    loading: false,
    error: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isFormValid = ({ name, email, password }) => name && email && password;

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: [] });
    const { name, email, password } = this.state;
    if (this.isFormValid(this.state)) {
      this.setState({ loading: true });
      this.props
        .signup({ name, email, password })
        .then(() => {
          this.setState({ loading: false });
        })
        .catch(e => {
          this.setState({ error: this.state.error.concat(e), loading: false });
        });
    }
  };

  renderForm() {
    return (
      <div className="Form_auth" style={classes.Form_auth}>
        <h1>Signup Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={this.handleChange}
          />
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
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className="Auth_Container" style={classes.Auth_Container}>
        {this.state.loading ? <Spinner /> : this.renderForm()}
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
