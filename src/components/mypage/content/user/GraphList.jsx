import React, { Component } from "react";
import Graph from "./Graph";
import { Grid } from "semantic-ui-react";

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
      <Grid columns="two" style={{ marginTop: "30px" }}>
        <Grid.Row>
          <Grid.Column width={8}>
            <h2>Reading Status</h2>
            <Graph counter={genreCounter} />
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>Genres</h2>
            <Graph counter={genreCounter} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <h2>Investment</h2>
            <Graph counter={genreCounter} />
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>Acheivement</h2>
            <Graph counter={genreCounter} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default GraphList;
