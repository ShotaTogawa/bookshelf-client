import React from "react";
import Spinner from "../../../../spinner/Spinner";
import { Link } from "react-router-dom";
import moment from "moment";
import { Table, Image } from "semantic-ui-react";
import DateForm from "./sub-components/DateForm";

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
          <Table.Cell>
            <Link to={`/book/${data._id}`}>{data.name}</Link>
          </Table.Cell>
          <Table.Cell>{data.genre}</Table.Cell>
          <Table.Cell>{data.author}</Table.Cell>
          <Table.Cell>{data.page_nums}</Table.Cell>
          <Table.Cell>{moment(data.createdAt).format("MMM D YYYY")}</Table.Cell>
          <Table.Cell>
            <DateForm
              userId={data.userId}
              bookId={data._id}
              status={data.status}
            />
          </Table.Cell>
          <Table.Cell>TODO: make function to upload image</Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  });
};

const BeforeReading = ({ books }) => {
  return renderTableData(books);
};

export default BeforeReading;
