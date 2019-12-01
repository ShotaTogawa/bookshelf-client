import React from "react";
import { Grid } from "semantic-ui-react";
import BookDetail from "./BookDetail";
import ShowMemo from "../memo/ShowMemo";
import CreateMemo from "../memo/CreateMemo";

const BookInfo = () => {
  return (
    <Grid columns="two">
      <Grid.Column width={6}>
        <BookDetail />
      </Grid.Column>
      <Grid.Column width={10}>
        <ShowMemo />
        <CreateMemo />
      </Grid.Column>
    </Grid>
  );
};

export default BookInfo;
