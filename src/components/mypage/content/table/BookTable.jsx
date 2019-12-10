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
import { Table, Menu, Grid, Icon, Button } from "semantic-ui-react";

class BookTable extends Component {
  state = { activeItem: "beforeReading", skip: 0 };

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.fetchBooks(local.user._id, this.state.activeItem);
  }

  handleItemClick = async (e, { name }) => {
    const local = JSON.parse(localStorage.getItem("user"));
    await this.setState({ activeItem: name });
    await this.props.fetchBooks(
      local.user._id,
      this.state.activeItem,
      this.state.skip
    );
  };

  renderTableHeader = () => {
    if (this.state.activeItem === "reading") {
      return tableHeaderReading.map(header => {
        return <Table.HeaderCell>{header}</Table.HeaderCell>;
      });
    } else if (this.state.activeItem === "beforeReading") {
      return tableHeaderBefore.map(header => {
        return <Table.HeaderCell>{header}</Table.HeaderCell>;
      });
    } else {
      return tableHeaderRead.map(header => {
        return <Table.HeaderCell>{header}</Table.HeaderCell>;
      });
    }
  };

  loadButton = () => {
    return (
      <div>
        <Button.Group>
          <Button icon>
            <Icon
              className="fas fa-arrow-left"
              onClick={() =>
                this.state.skip <= 0
                  ? 0
                  : this.setState({ skip: this.state.skip - 5 })
              }
            />
          </Button>
          <Button icon>
            <Icon
              className="fas fa-arrow-right"
              onClick={() => this.setState({ skip: this.state.skip + 5 })}
            />
          </Button>
        </Button.Group>
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
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
              <Reading books={this.props.books} loadButton={this.loadButton} />
            ) : this.state.activeItem === "read" ? (
              <Read books={this.props.books} loadButton={this.loadButton} />
            ) : (
              <BeforeReading
                books={this.props.books}
                loadButton={this.loadButton}
              />
            )}
          </Table>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log("hello", Object.values(state.book)[0]);
  console.log(state.book.books);
  return {
    books: state.book.books,
    currentUser: state.user.user
  };
};

export default connect(mapStateToProps, { fetchBooks })(BookTable);
