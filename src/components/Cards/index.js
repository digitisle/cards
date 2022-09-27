import React from "react";
import { connect } from "react-redux";

const getLabel = (card) => {
  var suite = "";

  if (card.suit === "H") {
    suite = "\u2665";
  } else if (card.suit === "S") {
    suite = "\u2660";
  } else if (card.suit === "D") {
    suite = "\u2666";
  } else if (card.suit === "C") {
    suite = "\u2663";
  }

  return `${card.rank} of ${suite}`;
};

const Cards = ({ cards }) => (
  <ul className="cards mw8-ns">
    {cards.map((card) => (
      <li>
        <img src={`images/${card.code}.png`} alt={getLabel(card)} />
      </li>
    ))}
  </ul>
);

const mapStateToProps = ({ deck: { cards } }) => ({
  cards,
});

export default connect(mapStateToProps)(Cards);
