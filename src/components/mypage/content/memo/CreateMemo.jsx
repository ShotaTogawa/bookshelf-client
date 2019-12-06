import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { createMemo } from "../../../../actions";
import history from "../../../../history";

class CreateMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: ""
    };
  }

  handleChange = event => {
    this.setState({ memo: event.target.value });
  };

  handleSubmit = async event => {
    // event.preventDefault();
    const bookId = this.props.bookId;
    const userId = this.props.userId;
    const { memo } = this.state;

    await this.props.createMemo(userId, bookId, {
      memo,
      bookId: bookId,
      userId: userId
    });
    history.push(`book/${bookId}`);
  };

  render() {
    console.log(this.state);
    return (
      <Form reply onSubmit={this.handleSubmit}>
        <Form.TextArea
          onChange={this.handleChange}
          style={{ marginTop: "20px" }}
        />
        <Button
          content="Add Memo"
          labelPosition="left"
          icon="edit"
          primary
          style={{ marginBottom: "50px" }}
        />
      </Form>
    );
  }
}

export default connect(null, { createMemo })(CreateMemo);
