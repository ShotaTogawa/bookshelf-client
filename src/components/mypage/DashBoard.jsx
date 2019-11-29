import React, { Component } from "react";
import Header from "./header/Header";
import SideMenu from "./SideMenu/SideMenu";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
      </div>
    );
  }
}

export default DashBoard;
