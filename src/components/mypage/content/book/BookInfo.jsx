import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchBook } from "../../../../actions";
import BookDetail from "./BookDetail";
import ShowMemo from "../memo/ShowMemo";
import CreateMemo from "../memo/CreateMemo";
import SideMenu from "../../sidemenu/SideMenu";

class BookInfo extends Component {
  componentDidMount() {
    this.props.fetchBook(
      "5dd4c61ac11600fea94c6a22",
      "5de9e38496a20038f5ea18bf"
    );
  }

  renderBook = () => {
    console.log(this.props.book);
    return this.props.book.map(book => {
      return (
        <>
          <Grid.Column width={5}>
            <BookDetail book={book} />
          </Grid.Column>
          <Grid.Column width={7}>
            <ShowMemo bookId={book._id} userId={book.userId} />
            <CreateMemo bookId={book._id} userId={book.userId} />
          </Grid.Column>
        </>
      );
    });
  };

  render() {
    return (
      <Grid>
        <SideMenu />
        {this.renderBook()}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.book);
  return {
    book: Object.values(state.book)
  };
};

export default connect(mapStateToProps, { fetchBook })(BookInfo);
