import { GameCards } from "@/app/game/models";
import { getStorageStringItem } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const playerName: string = getStorageStringItem("playerName");

export interface Game {
  playerName: string;
  gameCards: GameCards;
  score: number;
  errors: number;
  hits: number;
  showWinner: boolean;
  starGame: boolean;
}

const initialState: Game = {
  playerName: playerName,
  gameCards: {
    entries: [],
    meta: {
      total_entries: 0,
      per_page: 0,
      current_page: 0,
      total_pages: 0,
    },
  },
  score: 0,
  errors: 0,
  hits: 0,
  showWinner: false,
  starGame: false,
};

const gameSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.playerName = action.payload;
      localStorage.setItem("playerName", JSON.stringify(state.playerName));
    },
    setGameCards: (state, action: PayloadAction<GameCards>) => {
      state.gameCards = action.payload;
    },
    setScores: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setErrors: (state, action: PayloadAction<number>) => {
      state.errors = action.payload;
    },
    setHits: (state, action: PayloadAction<number>) => {
      state.hits = action.payload;
    },
    setShowWinner: (state, action: PayloadAction<boolean>) => {
      state.showWinner = action.payload;
    },
    setStarGame: (state, action: PayloadAction<boolean>) => {
      state.starGame = action.payload;
    },
  },
});

export const { setPlayerName, setGameCards } = gameSlice.actions;
export default gameSlice.reducer;
