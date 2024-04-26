import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (_, { payload }) => {
      return payload;
    },
  },
});

export const { setUser } = user.reducer;
export default user.reducer;
