import React from "react";
import { Step } from "semantic-ui-react";

const UserStatus = ({ status, cost }) => {
  console.log(status, cost);
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Your current Status</h2>
      <div style={{ marginLeft: "20px" }}>
        <Step.Group>
          <Step
            icon="window minimize outline"
            title={`Before Reading: ${status.beforeReading}`}
          />
        </Step.Group>
        <Step.Group>
          <Step
            icon="chart line"
            title={`Current Reading: ${status.reading}`}
          />
        </Step.Group>
        <Step.Group>
          <Step icon="thumbs up" title={`Finished Books: ${status.read}`} />
        </Step.Group>
        <Step.Group>
          <Step icon="book" title={`Your Total Books: ${status.total}`} />
        </Step.Group>
        <Step.Group>
          <Step icon="dollar" title={`You Spent:  $${cost.total}`} />
        </Step.Group>
      </div>
    </div>
  );
};

export default UserStatus;
