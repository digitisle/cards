import React from "react";
import { useSelector } from "react-redux";

const getLabel = (card) => {
  var suite = "";

  if (card.suit === "HEARTS") {
    suite = "\u2665";
  } else if (card.suit === "SPADES") {
    suite = "\u2660";
  } else if (card.suit === "DIAMONDS") {
    suite = "\u2666";
  } else if (card.suit === "CLUBS") {
    suite = "\u2663";
  }

  return `${card.value} of ${suite}`;
};

const Cards = () => {
  const {
    deck: { cards },
  } = useSelector((state) => state.deck);
  return (
    <ul className="cards mw8-ns">
      {cards.map((card) => (
        <li>
          <img src={card.image} alt={getLabel(card)} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
