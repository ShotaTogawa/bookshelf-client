import React, { Component } from "react";
import { Feed, Grid } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";
import { getTimeline } from "../../../../actions";
import { connect } from "react-redux";
import Spinner from "../../../../spinner/Spinner";
import defaultImage from "../../../assets/user.png";

class Timeline extends Component {
  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.getTimeline(local.user._id);
  }
  renderTimeline = () => {
    if (!this.props.books) return <Spinner />;
    return this.props.books.map((data, i) => {
      return (
        <Feed key={i} style={{ borderBottom: "solid #000 0.5px" }}>
          <Feed.Event>
            <Feed.Label
              image={data.userId.avatar ? data.userId.avatar : defaultImage}
            />
            <Feed.Content>
              <Feed.Summary>
                <a>{data.userId.name}</a> added "{data.name}"
              </Feed.Summary>
              <Feed.Extra images>
                <img src={data.image} />
              </Feed.Extra>
              <Feed.Date>{data.createdAt}</Feed.Date>
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
  return {
    user: state.user.user,
    books: state.book.books
  };
};

export default connect(mapStateToProps, { getTimeline })(Timeline);
