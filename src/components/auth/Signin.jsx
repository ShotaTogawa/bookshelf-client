import React, { Component } from "react";
import classes from "./auth.css";
import { signin } from "../../actions";
import { connect } from "react-redux";
import Spinner from "../../spinner/Spinner";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    error: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isFormValid = ({ email, password }) => email && password;

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: [] });
    const { email, password } = this.state;
    if (this.isFormValid(this.state)) {
      this.setState({ loading: true });
      this.props
        .signin({ email, password })
        .then(() => {
          this.setState({ loading: false });
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  renderForm() {
    return (
      <div className="Form_auth" style={classes.Form_auth}>
        <h1>Signin Form</h1>
        <form onSubmit={this.handleSubmit}>
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
    return (
      <div className="Auth_Container" style={classes.Auth_Container}>
        {this.state.loading ? <Spinner /> : this.renderForm()}
      </div>
    );
  }
}

export default connect(null, { signin })(Signin);
