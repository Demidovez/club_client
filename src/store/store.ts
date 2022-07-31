import { configureStore } from "@reduxjs/toolkit";
import { materialsAPI } from "./api/materialsService";
import settingsReducer from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    [materialsAPI.reducerPath]: materialsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(materialsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
