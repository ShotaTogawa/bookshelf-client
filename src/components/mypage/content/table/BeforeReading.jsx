import React, { Component } from "react";
import Spinner from "../../../../spinner/Spinner";
import { Link } from "react-router-dom";
import moment from "moment";
import { Table, Image, Button } from "semantic-ui-react";
import ImageModal from "./sub-components/ImageModal";
import DateForm from "./sub-components/DateForm";
import defaultImage from "../../../assets/book.png";

class BeforeReading extends Component {
  state = {
    modal: false
  };
  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  renderTableData = books => {
    if (!books) {
      return <Spinner />;
    }
    return books.map(data => {
      console.log(data.image);
      return (
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Link to={`/book/${data._id}`}>
                <Image
                  src={
                    data.image
                      ? "https://bookshelf-bucket.s3-us-west-2.amazonaws.com/image/" +
                        data.image
                      : defaultImage
                  }
                  size="tiny"
                />
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link to={`/book/${data._id}`}>{data.name}</Link>
            </Table.Cell>
            <Table.Cell>{data.genre}</Table.Cell>
            <Table.Cell>{data.author}</Table.Cell>
            <Table.Cell>{data.page_nums}</Table.Cell>
            <Table.Cell>
              {moment(data.createdAt).format("MMM D YYYY")}
            </Table.Cell>
            <Table.Cell>
              <DateForm
                userId={data.userId}
                bookId={data._id}
                status={data.status}
              />
            </Table.Cell>
            <Table.Cell>
              <Button
                circular
                icon="file image"
                color={"orange"}
                size={"mini"}
                onClick={this.openModal}
              />
              <ImageModal
                icon={"calendar alternate outline"}
                closeModal={this.closeModal}
                color={"teal"}
                bookId={data._id}
                userId={data.userId}
                modal={this.state.modal}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      );
    });
  };

  render() {
    return (
      <>
        {this.renderTableData(this.props.books)}
        {this.props.loadButton()}
      </>
    );
  }
}

export default BeforeReading;
