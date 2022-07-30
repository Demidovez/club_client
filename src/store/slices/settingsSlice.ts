import { createSlice } from "@reduxjs/toolkit";

interface ISettingsState {
  theme: {
    isNightMode: boolean;
    colors: {
      selected: string;
      unselected: string;
    };
  };
}

const initialState: ISettingsState = {
  theme: {
    isNightMode: false,
    colors: {
      selected: "#000000",
      unselected: "#AEAEAE",
    },
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toogleNightModeAction: (state) => {
      state.theme.isNightMode = !state.theme.isNightMode;
    },
  },
});

export const { toogleNightModeAction } = settingsSlice.actions;
export default settingsSlice.reducer;
