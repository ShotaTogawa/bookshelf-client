import React, { Component } from "react";
import { bookGenres } from "../../../../utils/variables";
import { Form, Select, Grid, Message } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";

class CreateBook extends Component {
  state = {
    title: "",
    author: "",
    genre: "",
    page_nums
  };

  isFormEmpty = ({ title, genre, author, page_nums }) => {
    return (
      !title.length || !genre.length || !author.length || !page_nums.length
    );
  };

  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Please fill in every fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    }
    return true;
  };

  displayErrors = errors =>
    errors.map((error, i) => (
      <small key={i} className="form-text alert alert-danger">
        {error.message}
      </small>
    ));

  handleSubmit = async event => {
    event.preventDefault();
    const { title, author, genre, page_nums } = this.state;

    if (this.isFormValid()) {
      await this.props.createBook({
        title,
        author,
        genre,
        page_nums,
        userId: "putuseridhere"
      });
    }
  };

  renderForm = () => (
    <Grid>
      <SideMenu />
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={8} style={{ marginTop: "30px" }}>
        <h1 style={{ textAlign: "center" }}>Register Book</h1>
        <Form>
          <Form.Field>
            <label>Book Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter your book title"
            />
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input
              type="text"
              name="author"
              placeholder="Enter the author name"
            />
          </Form.Field>
          <Form.Field placeholder="Genre">
            <Form.Field
              control={Select}
              label="Genre"
              options={bookGenres}
              placeholder="Genre"
            />
          </Form.Field>
          <Form.Field>
            <label>The book's number of pages</label>
            <input
              type="number"
              name="page_nums"
              placeholder="Enter the number of pages of the book"
            />
          </Form.Field>
          <button className="ui button" type="submit">
            Submit
          </button>
        </Form>
        {this.state.errors.length > 0 && (
          <Message error>
            <h3>Error</h3>
            {this.displayErrors(this.state.errors)}
          </Message>
        )}
      </Grid.Column>
    </Grid>
  );
  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default CreateBook;
