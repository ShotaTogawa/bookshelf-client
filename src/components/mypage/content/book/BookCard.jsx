import React from "react";
import StarRating from "../../../common/StarRating";
import { Card } from "semantic-ui-react";

const BookCard = ({ card }) => (
  <Card
    image={card.image}
    header={card.name}
    meta={card.genre}
    extra={<StarRating evaluation={card.evaluation} />}
  />
);

export default BookCard;
