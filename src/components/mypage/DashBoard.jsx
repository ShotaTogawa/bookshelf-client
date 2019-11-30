import React, { Component, Fragment } from "react";
import Header from "./header/Header";
import SideMenu from "./sidemenu/SideMenu";
import Content from "./content/Content";

class DashBoard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="ui two column  grid">
          <div className="four wide column" style={{ height: "100%" }}>
            <SideMenu />
          </div>
          <div className="twelve wide column">
            <Content />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DashBoard;
