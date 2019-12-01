import React, { Component } from "react";
import BookTable from "./table/BookTable";
import CreateBook from "./book/CreateBook";
import BookInfo from "./book/BookInfo";
import GraphList from "./user/GraphList";

class Content extends Component {
  render() {
    return (
      <>
        <GraphList />
        <CreateBook />
        <BookInfo />
        <BookTable />
      </>
    );
  }
}

export default Content;
