import React from "react";
import Spinner from "../../../../spinner/Spinner";
import StarRating from "../../../common/StarRating";
import moment from "moment";
import { Link } from "react-router-dom";
import { Table, Image } from "semantic-ui-react";
import DateForm from "./sub-components/DateForm";

const renderTableData = books => {
  // const local = JSON.parse(localStorage.getItem("user"));
  if (!books) {
    return <Spinner />;
  }
  return books.map(data => {
    const progress = data.read_pages / data.page_nums;
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
          <Table.Cell>{progress}</Table.Cell>
          <Table.Cell>{moment(data.startDate).format("MMM D YYYY")}</Table.Cell>
          <Table.Cell>
            <StarRating
              evaluation={data.evaluation}
              userId={data.userId}
              bookId={data._id}
            />
          </Table.Cell>
          <Table.Cell>
            <DateForm
              userId={data.userId}
              bookId={data._id}
              status={data.status}
            />
            TODO: Make status change func
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  });
};

const Reading = ({ books }) => {
  return renderTableData(books);
};
export default Reading;
