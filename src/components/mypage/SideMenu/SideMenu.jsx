import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
      <>
        <div className="User" style={classes.User}>
          <img src={defaultImage} alt={this.props.user.name} />
        </div>
        <h2
          style={{
            textAlign: "center",
            position: "sticky",
            top: "105px"
          }}
        >
          {this.props.user.name}
        </h2>
      </>
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
                    <Link to={submenu.url}>
                      <i className={submenu.icon}></i>
                      &ensp;{submenu.title}
                    </Link>
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
      <Grid.Column width={3}>
        <div className="Sidebar" stlye={classes.Sidebar}>
          {this.renderUser()}

          <div className="MenuList" style={classes.MenuList}>
            <ul className="Menu" style={classes.Menu}>
              {this.renderMenu()}
              <li onClick={this.handleSignout} style={{ cursor: "pointer" }}>
                &thinsp;&thinsp;<i className="fas fa-sign-out-alt"></i>
                &thinsp;&thinsp;Signout
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
