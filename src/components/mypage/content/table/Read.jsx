import React, { Component } from "react";
import StarRating from "../../../common/StarRating";
import Spinner from "../../../../spinner/Spinner";
import moment from "moment";
import { Link } from "react-router-dom";
import { Table, Image, Button } from "semantic-ui-react";
import ImageModal from "./sub-components/ImageModal";
import defaultImage from "../../../assets/book.png";

class Read extends Component {
  renderTableData = books => {
    if (!books) {
      return <Spinner />;
    }
    return books.map(data => {
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
            <Table.Cell>{moment(data.endDate).format("MMM D YYYY")}</Table.Cell>
            <Table.Cell>
              <StarRating
                evaluation={data.evaluation}
                userId={data.userId}
                bookId={data._id}
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

export default Read;
