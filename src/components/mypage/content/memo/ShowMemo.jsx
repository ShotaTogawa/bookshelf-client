import React, { Component, Fragment } from "react";
import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import { showMemos } from "../../../../actions";

class ShowMemo extends Component {
  state = {
    memo: ""
  };
  componentDidMount() {
    const bookId = this.props.bookId;
    const userId = this.props.userId;
    this.props.showMemos(userId, bookId);
  }

  renderMemo = () => {
    return this.props.memos.map(data => {
      return data.map(memo => {
        return (
          <Comment.Group>
            <Comment>
              <Comment.Content>
                <Comment.Text>{memo.memo}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Delete</Comment.Action>
                  <Comment.Metadata>
                    <div>{memo.createdAt}</div>
                  </Comment.Metadata>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        );
      });
    });
  };
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h2>Memo</h2>
        {this.renderMemo()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    memos: Object.values(state.memo)
  };
};

export default connect(mapStateToProps, { showMemos })(ShowMemo);
