import { configureStore } from "@reduxjs/toolkit";

import deckSlice from "./features/Deck/deckSlice";

export const store = configureStore({
  reducer: {
    deck: deckSlice,
  },
});
