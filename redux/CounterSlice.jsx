import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartTotalAmount: 0,
  cartTotalQantity: 0,
  data: [],
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    ItemData: (state, action) => {
      const prodExist = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (prodExist >= 0) {
        state.data[prodExist].quantity += 1;
      } else {
        const prod = { ...action.payload, quantity: 1 };
        state.data.push(prod);
      }
    },
    Increment: (state, action) => {
      const prodExist = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[prodExist].quantity += 1;
    },
    Decrement: (state, action) => {
      const prodExist = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.data[prodExist].quantity === 1) {
        state.data[prodExist].quantity = 1
      } else {
        state.data[prodExist].quantity -= 1;
      }
      
    },
    Delete: (state, action) => {
      // const prodExist = state.data.findIndex((item) => item.id === action.payload.id);
      const removeItem = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = removeItem;
    },
    getTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.data.reduce(
        (cartTotal, Item) => {
          const { price, quantity } = Item;
          const totalPrice = price * quantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += quantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
    DecrementgetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.data.reduce(
        (cartTotal, Item) => {
          const { price, quantity } = Item;
          const totalPrice = price * quantity;

          cartTotal.totalAmount -= totalPrice;
          cartTotal.totalQTY -= quantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount * -1;
      state.cartTotalQantity = totalQTY * -1;
    },
  },
});

export const {
  Increment,
  Decrement,
  ProdIncrement,
  Delete,
  ItemData,
  getTotals,
  DecrementgetTotals
} = CounterSlice.actions;
export const dataState = (state) => state.counter.data;
export const priceState = (state) => state.counter.cartTotalAmount;
export const qtyState = (state) => state.counter.cartTotalQantity;
export default CounterSlice.reducer;
