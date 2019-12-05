import React, { Component } from "react";
import { Feed, Grid } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";

const feedData = [
  {
    avatar: "",
    name: "Bob",
    title: "Apple pen",
    image: "https://react.semantic-ui.com/images/wireframe/image.png",
    date: "3days ago"
  },
  {
    avatar: "",
    name: "Bob",
    title: "Apple pen",
    image: "https://react.semantic-ui.com/images/wireframe/image.png",
    date: "3days ago"
  },
  {
    avatar: "",
    name: "Bob",
    title: "Apple pen",
    image: "https://react.semantic-ui.com/images/wireframe/image.png",
    date: "3days ago"
  }
];

class Timeline extends Component {
  renderTimeline = () => {
    return feedData.map(data => {
      return (
        <Feed>
          <Feed.Event>
            <Feed.Label image={data.avatar /*"avatar"*/} />
            <Feed.Content>
              <Feed.Date>{data.date}</Feed.Date>
              <Feed.Summary>
                <a>{data.name}</a> added "{data.title}"
              </Feed.Summary>
              <Feed.Extra images>
                <img src={data.image} />
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      );
    });
  };

  render() {
    return (
      <Grid>
        <SideMenu />
        <Grid.Column width={6} style={{ marginTop: "30px" }}>
          <h1>User Timeline</h1>
          {this.renderTimeline()}
        </Grid.Column>
      </Grid>
    );
  }
}

export default Timeline;
