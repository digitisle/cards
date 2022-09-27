import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDeck = createAsyncThunk("cards/fetchPosts", async () => {

  const cards = await fetch("/api/cards").then(
    (response) => response.json()
  );
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
        cards: payload
      };
    },
  },
});

export default deckSlice.reducer;
