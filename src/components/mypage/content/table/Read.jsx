import React from "react";
import StarRating from "../../../common/StarRating";
import Spinner from "../../../../spinner/Spinner";
import moment from "moment";
import { Link } from "react-router-dom";
import { Table, Image } from "semantic-ui-react";

const renderTableData = books => {
  // const local = JSON.parse(localStorage.getItem("user"));
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
                src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                size="tiny"
              />
            </Link>
          </Table.Cell>
          <Link to={`/book/${data._id}`}>
            <Table.Cell>{data.name}</Table.Cell>
          </Link>
          <Table.Cell>{data.genre}</Table.Cell>
          <Table.Cell>{data.author}</Table.Cell>
          <Table.Cell>{moment(data.endDate).format("MMM D YYYY")}</Table.Cell>
          <Table.Cell>
            <StarRating evaluation={data.evaluation} />
          </Table.Cell>
          <Table.Cell>TODO: make function to upload image</Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  });
};

const Read = ({ books }) => {
  return renderTableData(books);
};

export default Read;
