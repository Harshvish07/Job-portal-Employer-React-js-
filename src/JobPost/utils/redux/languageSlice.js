import { createSlice } from "@reduxjs/toolkit";
import languages from "../languages";
import flag from "../flag";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    availableLanguages: languages,
    selectedLanguage: "en" // Default to English
  },

  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
