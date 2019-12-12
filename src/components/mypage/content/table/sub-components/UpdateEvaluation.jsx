import React, { Component } from "react";
import { Button, Popup, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateEvaluation } from "../../../../../actions";
import history from "../../../../../history";

class UpdateEvaluation extends Component {
  state = {
    evaluation: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    const { userId, bookId } = this.props;
    const evaluation = this.state.evaluation;

    await this.props.updateEvaluation(userId, bookId, { evaluation });
    history.push("/books");
  };

  render() {
    return (
      <Popup
        trigger={
          <Button circular icon="star outline" color="yellow" size="mini" />
        }
        flowing
        hoverable
      >
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Evaluation</label>
            <select
              className="form-control"
              value={this.state.value}
              name="evaluation"
              onChange={this.handleChange}
            >
              <option>Evaluation</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </Form.Field>
          <Button compact color="blue" size="mini">
            Update
          </Button>
        </Form>
      </Popup>
    );
  }
}

export default connect(null, { updateEvaluation })(UpdateEvaluation);
