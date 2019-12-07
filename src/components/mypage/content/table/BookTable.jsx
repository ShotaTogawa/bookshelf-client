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

class BookTable extends Component {
  state = { activeItem: "Reading" };

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.fetchBooks(local.user._id);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderTableHeader = () => {
    if (this.state.activeItem === "Reading") {
      return tableHeaderReading.map(header => {
        return <Table.HeaderCell>{header}</Table.HeaderCell>;
      });
    } else if (this.state.activeItem === "Before") {
      return tableHeaderBefore.map(header => {
        return <Table.HeaderCell>{header}</Table.HeaderCell>;
      });
    } else {
      return tableHeaderRead.map(header => {
        return <Table.HeaderCell>{header}</Table.HeaderCell>;
      });
    }
  };

  render() {
    return (
      <Grid>
        <SideMenu />
        <Grid.Column width={12} style={{ marginTop: "30px" }}>
          <Menu tabular>
            <Menu.Item
              name="Reading"
              active={this.state.activeItem === "Reading"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Before"
              active={this.state.activeItem === "Before"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Read"
              active={this.state.activeItem === "Read"}
              onClick={this.handleItemClick}
            />
          </Menu>
          <Table basic="very">
            <Table.Header>
              <Table.Row>{this.renderTableHeader()}</Table.Row>
            </Table.Header>
            {this.state.activeItem === "Reading" ? (
              <Reading books={this.props.books} />
            ) : this.state.activeItem === "Read" ? (
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
