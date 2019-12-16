import React, { Component } from "react";
import SideMenu from "../../sidemenu/SideMenu";
import BeforeReading from "./BeforeReading";
import Reading from "./Reading";
import Read from "./Read";
import { connect } from "react-redux";
import { fetchBooks } from "../../../../actions";
import {
  tableHeaderBefore,
  tableHeaderReading,
  tableHeaderRead
} from "../../../../utils/variables";
import { Table, Menu, Grid } from "semantic-ui-react";
import Spinner from "../../../../spinner/Spinner";

class BookTable extends Component {
  state = { activeItem: "beforeReading", skip: 0, loading: false };

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.fetchBooks(local.user._id, this.state.activeItem);
  }

  handleItemClick = async (e, { name }) => {
    const local = JSON.parse(localStorage.getItem("user"));
    this.setState({ loading: true });
    await this.setState({ activeItem: name });
    await this.props.fetchBooks(
      local.user._id,
      this.state.activeItem,
      this.state.skip
    );
    this.setState({ loading: false });
  };

  renderTableHeader = () => {
    if (this.state.activeItem === "reading") {
      return tableHeaderReading.map(header => {
        return <Table.HeaderCell key={header}>{header}</Table.HeaderCell>;
      });
    } else if (this.state.activeItem === "beforeReading") {
      return tableHeaderBefore.map(header => {
        return <Table.HeaderCell key={header}>{header}</Table.HeaderCell>;
      });
    } else {
      return tableHeaderRead.map(header => {
        return <Table.HeaderCell key={header}>{header}</Table.HeaderCell>;
      });
    }
  };

  handleClick = async num => {
    const local = JSON.parse(localStorage.getItem("user"));
    const { skip } = this.state;
    if (skip < 0) {
      this.setState({ skip: 0 });
    } else {
      this.setState({ loading: true, skip: skip + num });
    }
    await this.props.fetchBooks(
      local.user._id,
      this.state.activeItem,
      this.state.skip
    );
    this.setState({ loading: false });
  };

  render() {
    return this.state.loading ? (
      <Spinner />
    ) : (
      <Grid>
        <SideMenu />
        <Grid.Column width={12} style={{ marginTop: "30px" }}>
          <Menu tabular>
            <Menu.Item
              name="reading"
              active={this.state.activeItem === "reading"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="beforeReading"
              active={this.state.activeItem === "beforeReading"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="read"
              active={this.state.activeItem === "read"}
              onClick={this.handleItemClick}
            />
          </Menu>
          <Table basic="very">
            <Table.Header>
              <Table.Row>{this.renderTableHeader()}</Table.Row>
            </Table.Header>
            {this.state.activeItem === "reading" ? (
              <Reading books={this.props.books} />
            ) : this.state.activeItem === "read" ? (
              <Read books={this.props.books} />
            ) : (
              <BeforeReading books={this.props.books} />
            )}
          </Table>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.book.books,
    currentUser: state.user.user
  };
};

export default connect(mapStateToProps, { fetchBooks })(BookTable);
