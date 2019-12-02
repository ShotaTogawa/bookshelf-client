import React, { Component, Fragment } from "react";
import SideMenu from "../../sidemenu/SideMenu";
import { connect } from "react-redux";
import { fetchBooks } from "../../../../actions";
import {
  tableHeaderBefore,
  tableHeaderReading,
  tableHeaderRead
} from "../../../../utils/variables";
import { Table, Menu, Image, Grid } from "semantic-ui-react";

const tableData = [
  {
    emp: "someone",
    guest: 10,
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
  },
  {
    emp: "anyone",
    guest: 20,
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
  }
];

class BookTable extends Component {
  state = { activeItem: "Reading" };

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.fetchBooks(local.user._id);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  renderTableHeader = () => {
    return tableHeaderBefore.map(header => {
      return <Table.HeaderCell>{header}</Table.HeaderCell>;
    });
  };

  renderTableData = () => {
    // const local = JSON.parse(localStorage.getItem("user"));
    return tableData.map(data => {
      return (
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Image
                src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                size="tiny"
              />
            </Table.Cell>
            <Table.Cell>{data.emp}</Table.Cell>
            <Table.Cell>{data.a}</Table.Cell>
            <Table.Cell>{data.b}</Table.Cell>
            <Table.Cell>{data.c}</Table.Cell>
            <Table.Cell>{data.d}</Table.Cell>
            <Table.Cell>{data.e}</Table.Cell>
          </Table.Row>
        </Table.Body>
      );
    });
  };

  render() {
    console.log(this.props.books);
    return (
      <Grid>
        <SideMenu />
        <Grid.Column width={11} style={{ marginTop: "30px" }}>
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
            {this.renderTableData()}
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
