import React, { Component, Fragment } from "react";
import {
  tableHeaderBefore,
  tableHeaderReading,
  tableHeaderRead
} from "../../../../utils/variables";
import { Table as Table1, Menu, Image, Header } from "semantic-ui-react";

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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  renderTableHeader = () => {
    return tableHeaderBefore.map(header => {
      return <Table1.HeaderCell>{header}</Table1.HeaderCell>;
    });
  };

  renderTableData = () => {
    return tableData.map(data => {
      return (
        <Table1.Body>
          <Table1.Row>
            <Table1.Cell>
              <Image
                src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                size="tiny"
              />
            </Table1.Cell>
            <Table1.Cell>{data.emp}</Table1.Cell>
            <Table1.Cell>{data.a}</Table1.Cell>
            <Table1.Cell>{data.b}</Table1.Cell>
            <Table1.Cell>{data.c}</Table1.Cell>
            <Table1.Cell>{data.d}</Table1.Cell>
            <Table1.Cell>{data.e}</Table1.Cell>
          </Table1.Row>
        </Table1.Body>
      );
    });
  };

  render() {
    return (
      <Fragment>
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
        <Table1 basic="very">
          <Table1.Header>
            <Table1.Row>{this.renderTableHeader()}</Table1.Row>
          </Table1.Header>
          {this.renderTableData()}
        </Table1>
      </Fragment>
    );
  }
}

export default BookTable;
