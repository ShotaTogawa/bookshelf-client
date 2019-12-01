import React, { Component } from "react";
import { Step, Icon } from "semantic-ui-react";

class Progress extends Component {
  render() {
    return (
      <Step.Group style={{ marginTop: "40px", textAlign: "center" }}>
        <Step>
          <Icon name="window minimize outline" />
          <Step.Content>
            <Step.Description>Before</Step.Description>
            <Step.Title>5</Step.Title>
          </Step.Content>
        </Step>
        <Step>
          <Icon name="chart line" />
          <Step.Content>
            <Step.Description>Reading</Step.Description>
            <Step.Title>2</Step.Title>
          </Step.Content>
        </Step>
        <Step>
          <Icon name="thumbs up" />
          <Step.Content>
            <Step.Description>Read</Step.Description>
            <Step.Title>6</Step.Title>
          </Step.Content>
        </Step>
        <Step>
          <Icon name="book" />
          <Step.Content>
            <Step.Description>Total</Step.Description>
            <Step.Title>13</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    );
  }
}

export default Progress;
