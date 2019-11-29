import React, { Component } from "react";
import Header from "./header/Header";
import SideMenu from "./sidemenu/SideMenu";
import Content from "./content/Content";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main-content">
          <SideMenu />
          <Content />
        </main>
      </div>
    );
  }
}

export default DashBoard;
