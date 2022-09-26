// types of action
export const ACTIONS = {
  SET_DECK: "SET_DECK",
  SET_CARDS: "SET_CARDS",
  SORT_DECK: "SORT_DECK",
};

// actions
export function getDeck() {
  return async (dispatch) => {

    const cards = await fetch("/api/cards").then(
      (response) => response.json()
    );

    dispatch({
      type: ACTIONS.SET_CARDS,
      payload: { cards: cards, loaded: true },
    });
  };
}
