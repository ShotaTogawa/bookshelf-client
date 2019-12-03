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
      "5de4ab1a258bb9adc92c4c42"
    );
  }

  renderBook = () => {
    return this.props.book.map(book => {
      return (
        <Grid>
          <SideMenu />
          <Grid.Column width={5}>
            <BookDetail book={book} />
          </Grid.Column>
          <Grid.Column width={7}>
            <ShowMemo bookId={book._id} />
            <CreateMemo bookId={book._id} />
          </Grid.Column>
        </Grid>
      );
    });
  };

  render() {
    return this.renderBook();
  }
}

const mapStateToProps = state => {
  return {
    book: Object.values(state.book)
  };
};

export default connect(mapStateToProps, { fetchBook })(BookInfo);
