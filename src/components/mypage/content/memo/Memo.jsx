import React, { Component } from "react";
import CreateMemo from "./CreateMemo";
import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import { showMemos, deleteMemo } from "../../../../actions";
import Spinner from "../../../../spinner/Spinner";
import history from "../../../../history";

class Memo extends Component {
  state = {
    memo: "",
    loading: false
  };

  componentDidMount() {
    const bookId = this.props.bookId;
    const userId = this.props.userId;
    this.props.showMemos(userId, bookId);
  }

  handleDelete = async (event, userId, bookId, memoId) => {
    event.preventDefault();
    this.setState({ loading: true });
    await this.props.deleteMemo(userId, bookId, memoId.toString());
    try {
      this.setState({ loading: false });
      await this.props.showMemos(userId, bookId);
      history.push(`/book/${bookId}`);
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  renderMemo = () => {
    if (!this.props.memos) return <Spinner />;
    return this.props.memos.map(data => {
      console.log(`data: ${JSON.stringify(data)}`);
      return data.map(memo => {
        return (
          <Comment.Group>
            <Comment>
              <Comment.Content>
                <Comment.Text>{memo.memo}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action
                    onClick={event =>
                      this.handleDelete(
                        event,
                        memo.userId,
                        memo.bookId,
                        memo._id
                      )
                    }
                  >
                    Delete
                  </Comment.Action>
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
    console.log(this.props.location);
    return (
      <div style={{ marginTop: "30px" }}>
        <h2>Memo</h2>
        {this.renderMemo()}
        <CreateMemo bookId={this.props.bookId} userId={this.props.userId} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    memos: Object.values(state.memo)
  };
};

export default connect(mapStateToProps, { showMemos, deleteMemo })(Memo);
