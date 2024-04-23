import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkMode {
  darkMode: boolean;
}
const stringifyDarkMode = localStorage.getItem("darkMode");
const storedDarkModeData =
  stringifyDarkMode !== null ? JSON.parse(stringifyDarkMode) : false;
const initialState: DarkMode = {
  darkMode: storedDarkModeData,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});
export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
