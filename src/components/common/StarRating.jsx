import React, { Component } from "react";
import { Rating } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateEvaluation } from "../../actions";
import history from "../../history";
import Spinner from "../../spinner/Spinner";

class StarRating extends Component {
  state = {
    evaluation: this.props.evaluation,
    loading: false
  };
  handleRate = async (e, { rating }) => {
    this.setState({ evaluation: rating, loading: true });
    const { userId, bookId } = this.props;
    console.log(userId, bookId);
    await this.props.updateEvaluation(userId, bookId, this.state.evaluation);
    try {
      this.setState({ loading: false });
      history.push("/books");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state.evaluation);
    return (
      <>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <Rating
            icon="star"
            defaultRating={this.props.evaluation}
            maxRating={5}
            onRate={this.handleRate}
          />
        )}
      </>
    );
  }
}

export default connect(null, { updateEvaluation })(StarRating);
