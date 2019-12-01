import React, { Component } from "react";
import { bookGenres } from "../../../../utils/variables";
import { Form, Select, Grid } from "semantic-ui-react";

class CreateBook extends Component {
  renderForm = () => (
    <Grid>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={9}>
        <h1>Register Book</h1>
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
      </Grid.Column>
      {/* <Grid.Column width={2}></Grid.Column> */}
    </Grid>
  );
  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default CreateBook;
