import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    username:""
  },
  reducers: {
    setUser: (_,action) => {
      _.username = action.payload
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
