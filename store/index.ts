import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "./gameSlice";

export const store = configureStore({
  reducer: {
    player: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
