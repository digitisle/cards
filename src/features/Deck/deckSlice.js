import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDeck = createAsyncThunk("cards/fetchPosts", async () => {
  const deck = await fetch("/api/deck/new/shuffle/?deck_count=1").then(
    (response) => response.json()
  );
  const cards = await fetch(
    `/api/deck/${deck.deck_id}/draw/?count=${deck.remaining}`
  ).then((response) => response.json());
  return cards;
});

export const deckSlice = createSlice({
  name: "deck",
  initialState: {
    status: "idle",
    error: null,
    deck: null,
  },
  extraReducers: {
    [fetchDeck.fulfilled]: (state, { payload }) => {
      state.deck = {
        ...payload,
      };
    },
  },
});

export default deckSlice.reducer;
