import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import BookDetail from "./BookDetail";
import ShowMemo from "../memo/ShowMemo";
import CreateMemo from "../memo/CreateMemo";
import SideMenu from "../../sidemenu/SideMenu";

class BookInfo extends Component {
  render() {
    return (
      <Grid>
        <SideMenu />
        <Grid.Column width={5}>
          <BookDetail />
        </Grid.Column>
        <Grid.Column width={7}>
          <ShowMemo />
          <CreateMemo />
        </Grid.Column>
      </Grid>
    );
  }
}

export default BookInfo;
