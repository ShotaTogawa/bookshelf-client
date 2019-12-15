import React, { Component } from "react";
import GraphLayout from "./GraphLayout";
import UserStatus from "./UserStatus";
import { Grid } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";
import { connect } from "react-redux";
import { setCurrentUser, calculateStatus } from "../../../../actions";

const genreCounter = {
  Biographies: 1,
  Technology: 2,
  Fitness: 2,
  Health: 1,
  Novel: 1
};

class UserPage extends Component {
  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.setCurrentUser(local.user._id);
    this.props.calculateStatus(local.user._id);
  }

  // countGenres = async books => {
  //   const counter = {};
  //   await books.map(book => {
  //     if (counter[book.genre]) {
  //       counter[book.genre] += 1;
  //     } else {
  //       counter[book.genre] = 1;
  //     }
  //   });
  //   return counter;
  // };

  // countStatus = books => {
  //   const counter = {};
  //   const total = books.length;
  //   counter["total"] = total;
  //   books.forEach(book => {
  //     if (counter[book.status]) {
  //       counter[book.status] += 1;
  //     } else {
  //       counter[book.status] = 1;
  //     }
  //   });
  //   return counter;
  // };

  // calcurateTotalPrice = books => {
  //   const counter = { total: 0 };
  //   books.forEach(book => {
  //     counter["total"] += book.purchased_price;
  //   });
  //   return counter;
  // };

  renderField = () => {
    return this.props.status.map(status => {
      return (
        <Grid columns="three">
          <SideMenu />
          <Grid.Column width={5}>
            <UserStatus
              user={this.props.user}
              status={status[1]}
              cost={status[2]}
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <GraphLayout title={"Genres"} counter={status[0]} />
          </Grid.Column>
        </Grid>
      );
    });
  };

  render() {
    return this.renderField();
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    status: Object.values(state.status)
  };
};

export default connect(mapStateToProps, { setCurrentUser, calculateStatus })(
  UserPage
);
