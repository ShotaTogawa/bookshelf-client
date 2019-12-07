import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchBook } from "../../../../actions";
import BookDetail from "./BookDetail";
import Memo from "../memo/Memo";
import CreateMemo from "../memo/CreateMemo";
import SideMenu from "../../sidemenu/SideMenu";
import Spinner from "../../../../spinner/Spinner";

class BookInfo extends Component {
  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    const bookId = this.props.location.pathname.slice(6);
    this.props.fetchBook(local.user._id, bookId);
  }
  renderBook = () => {
    // return this.props.book.map(book => {
    const { book } = this.props;
    if (!book || book.length === 0) return <Spinner />;
    // const book = this.props.book[1];
    return (
      <>
        {/* <Grid.Column width={5}>
            <BookDetail book={book} />
          </Grid.Column>
          <Grid.Column width={7}>
            <Memo bookId={book._id} userId={book.userId} />
          </Grid.Column> */}
        <Grid.Column width={5}>
          <BookDetail book={book[0]} />
        </Grid.Column>
        <Grid.Column width={7}>
          <Memo bookId={book[0]._id} userId={book[0].userId} />
        </Grid.Column>
      </>
    );
    // });
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
  console.log(state);
  return {
    book: Object.values(state.book),
    user: state.user.user
  };
};

export default connect(mapStateToProps, { fetchBook })(BookInfo);
