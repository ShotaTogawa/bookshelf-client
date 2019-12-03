import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import defaultImage from "../../assets/user.svg";
import classes from "./sidemenu.css";
import { menus } from "../../../utils/variables";
import { Grid } from "semantic-ui-react";
import { signout, setCurrentUser } from "../../../actions";
import history from "../../../history";

class SideMenu extends Component {
  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.setCurrentUser(local.user._id);
  }
  renderUser = () => {
    return (
      <div className="User" style={classes.User}>
        <img src={defaultImage} alt={this.props.user.name} />
        <p>
          Welcome: <span>{this.props.user.name}</span>
        </p>
      </div>
    );
  };

  handleSignout = async () => {
    await this.props.signout();
    try {
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  renderMenu = () => {
    return menus.map(menu => {
      return (
        <li key={menu.title}>
          <a href="#">
            <i className={menu.icon}></i>
            &ensp;{menu.title}
          </a>

          {menu.submenus.length > 0
            ? menu.submenus.map(submenu => (
                <ul>
                  <li key={submenu.title}>
                    <a href={submenu.url}>
                      <i className={submenu.icon}></i>
                      &ensp;{submenu.title}
                    </a>
                  </li>
                </ul>
              ))
            : ""}
        </li>
      );
    });
  };

  render() {
    return (
      <Grid.Column width={4}>
        <div className="Sidebar" stlye={classes.Sidebar}>
          {this.renderUser()}

          <div className="MenuList" style={classes.MenuList}>
            <h2>Menu</h2>
            <ul className="Menu" style={classes.Menu}>
              {this.renderMenu()}
              <li onClick={this.handleSignout} style={{ cursor: "pointer" }}>
                <i className="fas fa-sign-out-alt"></i>
                &ensp;Signout
              </li>
            </ul>
          </div>
        </div>
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps, { signout, setCurrentUser })(SideMenu);
