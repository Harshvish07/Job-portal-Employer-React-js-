import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login-details",
  initialState: {
    userID: "",
    token: ""
  },

  reducers: {
    setAuthData: (state, action) => {
      state.userID = action.payload.userID;
      state.token = action.payload.token;
    }
  }
});

export const { setAuthData } = loginSlice.actions;
export default loginSlice.reducer;
