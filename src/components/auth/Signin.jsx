import React, { Component } from "react";
import classes from "./auth.css";
import { signin } from "../../actions";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Spinner from "../../spinner/Spinner";
import { isAuthenticated } from "./";

const { user } = isAuthenticated();

class Signin extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  isFormEmpty = ({ email, password }) => {
    return !email.length || !password.length;
  };

  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Please fill in all Fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    }
    return true;
  };

  displayErrors = errors =>
    errors.map((error, i) => (
      <small key={i} className="form-text alert alert-danger">
        {error.message}
      </small>
    ));

  handleSubmit = e => {
    // e.preventDefault();
    this.setState({ error: [] });
    const { email, password } = this.state;
    if (this.isFormValid()) {
      this.setState({ loading: true });
      this.props
        .signin({ email, password })
        .then(() => {
          this.setState({ loading: false });
        })
        .catch(e => {
          console.log(e);
          this.setState({ loading: false });
        });
    }
  };

  redirectUser = () => {
    if (user) {
      return <Redirect to="/user/dashboard" />;
    }

    if (!user) {
      return <Redirect to="/signin" />;
    }
  };

  renderForm() {
    return (
      <div className="Form_auth" style={classes.Form_auth}>
        <h1>Signin Form</h1>
        {this.displayErrors(this.state.errors)}
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
        <Link to="/signup">Not signup yet?</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="Auth_Container" style={classes.Auth_Container}>
        {this.state.loading ? <Spinner /> : this.renderForm()}
        {this.redirectUser()}
      </div>
    );
  }
}

export default connect(null, { signin })(Signin);
