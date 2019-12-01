import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class CreateMemo extends Component {
  state = {
    memo: ""
  };

  handleChange = event => {
    this.setState({ memo: event.target.value });
  };

  handleSubmit = async () => {};

  render() {
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

export default CreateMemo;
