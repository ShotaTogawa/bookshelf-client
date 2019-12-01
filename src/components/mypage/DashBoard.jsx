import React, { Component, Fragment } from "react";
import Header from "./header/Header";
import SideMenu from "./sidemenu/SideMenu";
import Content from "./content/Content";
import { Grid } from "semantic-ui-react";

class DashBoard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <div className="ui two column  grid">
          <div className="four wide column" style={{ height: "100%" }}>
            <SideMenu />
          </div>
          <div className="twelve wide column">
            <Content />
          </div>
        </div> */}
        <Grid>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={3}>
            <SideMenu />
          </Grid.Column>

          <Grid.Column width={11}>
            <Content />
          </Grid.Column>
        </Grid>
        <Grid.Column width={1}></Grid.Column>
      </Fragment>
    );
  }
}

export default DashBoard;
