import React, { Component } from "react";
import { connect } from "react-redux";
import { bookGenres } from "../../../../utils/variables";
import { createBook } from "../../../../actions";
import { Form, Grid, Message } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";

class CreateBook extends Component {
  state = {
    name: "",
    author: "",
    genre: "",
    price: null,
    page_nums: null,
    errors: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isFormEmpty = ({ name, genre, author, page_nums }) => {
    return !name.length || !genre.length || !author.length || !page_nums.length;
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
    const local = JSON.parse(localStorage.getItem("user"));
    console.log(typeof local.user._id);
    const { name, author, genre, page_nums, price } = this.state;

    if (this.isFormValid()) {
      await this.props.createBook(local.user._id, {
        name,
        author,
        genre,
        page_nums,
        price,
        userId: local.user._id
      });
    }
  };

  renderForm = () => (
    <Grid>
      <SideMenu />
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={8} style={{ marginTop: "30px" }}>
        <h1 style={{ textAlign: "center" }}>Register Book</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Book Title</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your book title"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input
              type="text"
              name="author"
              placeholder="Enter the author name"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field placeholder="Genre">
            <label htmlFor="genre">Genre</label>
            <select
              className="form-control"
              value={this.state.value}
              name="genre"
              onChange={this.handleChange}
            >
              <option>Select Genre</option>
              {bookGenres.map(genre => {
                return <option value={genre}>{genre}</option>;
              })}
            </select>
          </Form.Field>
          <Form.Field>
            <label>The book's number of pages</label>
            <input
              type="number"
              name="page_nums"
              placeholder="Enter the number of pages of the book"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>The book's purchased price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter purchased price"
              onChange={this.handleChange}
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
    console.log(this.state);
    return <div>{this.renderForm()}</div>;
  }
}

export default connect(null, { createBook })(CreateBook);
