import { ACTIONS } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CARDS: {
      const { cards, loaded } = action.payload;
      return {
        ...state,
        deck: {
          loaded,
          cards,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
