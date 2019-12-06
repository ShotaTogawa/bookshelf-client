import React, { Component } from "react";
import GraphLayout from "./GraphLayout";
import { Grid } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";

const genreCounter = {
  Biographies: 1,
  Technology: 2,
  Fitness: 2,
  Health: 1,
  Novel: 1
};

class GraphList extends Component {
  render() {
    return (
      <Grid columns="three">
        <SideMenu />
        <Grid.Column width={6}>
          <GraphLayout counter={genreCounter} title={"Reading Status"} />
          <GraphLayout counter={genreCounter} title={"Genres"} />
        </Grid.Column>
        <Grid.Column width={6}>
          <GraphLayout counter={genreCounter} title={"Investment"} />
          <GraphLayout counter={genreCounter} title={"Acheivement"} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default GraphList;
