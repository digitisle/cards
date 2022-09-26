const express = require("express")
const bodyParser = require("body-parser")
const fetch = require("node-fetch")
const { Deck } = require("deckofcards")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/api/*", (req, res) => {

  const deck = new Deck()

  const cards = deck.cards.map((card) => {
    
    let code = card.rank + card.suit

    //replace rank: "T" with rank: "10"
    if (card.rank === 'T') {
      return { code, ...card, rank: '10' }
    } else {
      return { code, ...card }
    }
  });

  res.setHeader("Content-Type", "application/json")

  //intentially delay response
  setTimeout((() => {
    res.send(JSON.stringify(cards))
  }), 500)
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
