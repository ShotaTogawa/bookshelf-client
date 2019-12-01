import React, { Component } from "react";
import defaultImage from "../../assets/user.svg";
import classes from "./sidemenu.css";
import { menus } from "../../../utils/variables";

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

  renderMenu = () => {
    return menus.map((menu, i) => {
      return (
        <li>
          <a href="#">
            <i className={menu.icon}></i>
            &ensp;{menu.title}
          </a>

          {menu.submenus.length > 0
            ? menu.submenus.map((submenu, i) => (
                <ul>
                  <li>
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
      <div className="Sidebar" stlye={classes.Sidebar}>
        {this.renderUser()}

        <div className="MenuList" style={classes.MenuList}>
          <h2>Menu</h2>
          <ul className="Menu" style={classes.Menu}>
            {this.renderMenu()}
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
