import React, { Component } from "react";
import { Comment } from "semantic-ui-react";

const data = [
  {
    memo: "This will be great for business reports. I will definitely download",
    date: "2011/11/01"
  },
  {
    memo: "This will be great for business reports. I will definitely download",
    date: "2011/11/01"
  }
];

class ShowMemo extends Component {
  renderMemo = () => {
    return data.map(data => {
      return (
        <Comment.Group>
          <Comment>
            <Comment.Content>
              <Comment.Text>{data.memo}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Delete</Comment.Action>
                <Comment.Metadata>
                  <div>{data.date}</div>
                </Comment.Metadata>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      );
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

export default ShowMemo;
