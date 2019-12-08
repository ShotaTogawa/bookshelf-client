import React from "react";
import BookCard from "./BookCard";
import { Card } from "semantic-ui-react";

const renderCards = cards => {
  return cards.map(card => {
    console.log(card);
    return <BookCard key={card._id} card={card} />;
  });
};

const CardList = ({ cards }) => {
  console.log(cards);
  return (
    <div
      style={{
        marginTop: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      <Card.Group>{renderCards(cards)}</Card.Group>
    </div>
  );
};

export default CardList;
