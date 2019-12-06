import React, { Component } from "react";
import { Feed, Grid } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";
import { getTimeline } from "../../../../actions";
import { connect } from "react-redux";

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
  componentDidMount() {
    // const local = JSON.parse(localStorage.getItem("user"));
    // this.props.getTimeline(local.user._id);
  }
  renderTimeline = () => {
    return feedData.map((data, i) => {
      return (
        <Feed key={i}>
          <Feed.Event>
            <Feed.Label image={data.avatar /*"avatar"*/} />
            <Feed.Content>
              <Feed.Summary>
                <a>{data.name}</a> added "{data.title}"
              </Feed.Summary>
              <Feed.Extra images>
                <img src={data.image} />
              </Feed.Extra>
              <Feed.Date>{data.date}</Feed.Date>
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

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user.user,
    books: state.book.books
  };
};

export default connect(mapStateToProps, { getTimeline })(Timeline);
