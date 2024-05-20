import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    product: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.product.push({...action.payload,count:1});
    },
    setDelete: (state, action) => {
      state.product = state.product.filter((f) => f.id !== action.payload);
    },
    IncItem: (state, action) => {
      const exsite = state.product.find((x) => {
        return x.id === action.payload;
      });
      state.product = state.product.map((item) => {
        return item.id === action.payload
          ? { ...exsite, count: exsite.count + 1 }
          : item;
      });
    },
    DecItem: (state, action) => {
      const exsite = state.product.find((x) => {
        return x.id === action.payload;
      });
      state.product = state.product.map((item) => {
        return item.id === action.payload
          ? { ...exsite, count: exsite.count - 1 }
          : item;
      });
      if (exsite.count === 0) {
        state.product = state.product.filter((f) => f.id !== action.payload);
      }
    },
    ClearItem: (state) => {
      state.product = [];
    },
    Add: (state, _) => {
      state.product = state.product.map((item) => {
        return { ...state.product, count: 2 };
      });
    },
  },
});

export const { setCart, setDelete, IncItem, DecItem, ClearItem, Add } =
  cart.actions;
export default cart.reducer;
