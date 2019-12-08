import React, { Component } from "react";
import { Rating } from "semantic-ui-react";

class StarRating extends Component {
  state = {
    evaluation: this.props.evaluation
  };
  handleRate = (e, { rating }) => {
    this.setState({ evaluation: rating });
  };

  render() {
    console.log(this.state.evaluation);
    return (
      <>
        <Rating
          icon="star"
          defaultRating={this.props.evaluation}
          maxRating={5}
          onRate={this.handleRate}
        />
      </>
    );
  }
}

export default StarRating;
