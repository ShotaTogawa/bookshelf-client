import React, { Component } from "react";

const menus = [
  {
    url: "#",
    icon: "fas fa-address-book",
    title: "Clients",
    submenus: [
      { url: "#", title: "View All", icon: "fas fa-list" },
      { url: "#", title: "Add new", icon: "fas fa-plus" }
    ]
  },
  {
    url: "#",
    icon: "fas fa-address-book",
    title: "Book",
    submenus: []
  }
];

const user = {
  name: "test",
  avatar: ""
};

class SideMenu extends Component {
  renderUser = () => {
    return (
      <div className="user">
        <img src={user.avatar} />
        <p>
          Welcome: <span>{user.name}</span>
        </p>
      </div>
    );
  };

  renderMenu = () => {
    return menus.map((menu, i) => {
      return (
        <div className="ui list">
          <div className="item">
            <div className="content">
              <div className="header">
                <i className={menu.icon}></i>
                {menu.title}
              </div>
              <div className="list">
                {menu.submenus.length > 0
                  ? menu.submenus.map((submenu, i) => (
                      <div className="item">
                        <div className="content">
                          <div className="header">{submenu.title}</div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <aside className="sidebar">
        {this.renderUser()}
        <div className="menu-admin">
          <h2>Menu</h2>
          {this.renderMenu()}
        </div>
      </aside>
    );
  }
}

export default SideMenu;
