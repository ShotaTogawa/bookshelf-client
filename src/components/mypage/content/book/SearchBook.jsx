import React, { Component } from "react";
import SideMenu from "../../sidemenu/SideMenu";
import { Search, Grid } from "semantic-ui-react";

class SearchBook extends Component {
  render() {
    console.log(this.state);
    return (
      <Grid>
        <SideMenu />
        <Grid.Column width={12} style={{ marginTop: "30px" }}>
          <div>
            <h1>Search</h1>
            <Search />
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SearchBook;
