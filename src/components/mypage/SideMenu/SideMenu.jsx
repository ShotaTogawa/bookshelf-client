import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import defaultImage from "../../assets/user.svg";
import classes from "./sidemenu.css";
import { menus } from "../../../utils/variables";
import { Grid } from "semantic-ui-react";
import { signout } from "../../../actions";

const user = {
  name: "test",
  avatar: ""
};

class SideMenu extends Component {
  renderUser = () => {
    return (
      <div className="User" style={classes.User}>
        <img src={defaultImage} alt={user.name} />
        <p>
          Welcome: <span>{user.name}</span>
        </p>
      </div>
    );
  };

  handleSignout = async () => {
    await this.props.signout().then(() => <Redirect to="/" />);
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

export default connect(null, { signout })(SideMenu);
