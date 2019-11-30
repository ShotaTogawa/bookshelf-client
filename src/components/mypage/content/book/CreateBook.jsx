import React, { Component } from "react";
import { bookGenres } from "../../../../utils/variables";

class CreateBook extends Component {
  renderForm = () => (
    <form className="ui form">
      <div className="field">
        <label>Book Title</label>
        <input type="text" name="title" placeholder="Enter your book title" />
      </div>
      <div className="field">
        <label>Author</label>
        <input type="text" name="author" placeholder="Enter the author name" />
      </div>
      <div className="field">
        <label htmlFor="genre">Genre</label>
        <select
          className="ui fluid dropdown"
          name="genre"
          //   value={this.state.value}
          //   onChange={this.handleChange}
        >
          <option value="">Select Genre</option>
          {bookGenres.map(genre => (
            <option value={genre}>{genre}</option>
          ))}
          ); };
        </select>
      </div>
      <div className="field">
        <label>The book's number of pages</label>
        <input
          type="number"
          name="page_nums"
          placeholder="Enter the number of pages of the book"
        />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default CreateBook;
