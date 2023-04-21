import { GameCards } from "@/app/game/models";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Player {
  playerName: string;
  gameCards: GameCards;
}

const initialState: Player = {
  playerName: "",
  gameCards: {
    entries: [],
    meta: {
      total_entries: 0,
      per_page: 0,
      current_page: 0,
      total_pages: 0,
    },
  },
};

const gameSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.playerName = action.payload;
    },
    setGameCards: (state, action: PayloadAction<GameCards>) => {
      state.gameCards = action.payload;
    },
  },
});

export const { setPlayerName, setGameCards } = gameSlice.actions;
export default gameSlice.reducer;
