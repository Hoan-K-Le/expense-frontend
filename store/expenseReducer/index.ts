import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface
export interface ExpenseProp {
  price: string;
  date: string;
  tag: string;
}
interface ExpenseState {
  expense: ExpenseProp[];
  total: string;
  listOfTags: string[];
}
const storedExpenseData = localStorage.getItem("expenseData");
const expensesData =
  storedExpenseData !== null ? JSON.parse(storedExpenseData) : [];

const storedExpenseTotal = localStorage.getItem("expenseTotal");
const expenseTotal =
  storedExpenseTotal !== null ? JSON.parse(storedExpenseTotal) : "00.00";
const storedTags = localStorage.getItem("tags");
const tagsData = storedTags !== null ? JSON.parse(storedTags) : [];

// initialState
// price, date, tag
const initialState: ExpenseState = {
  expense: expensesData,
  total: expenseTotal ? expenseTotal : "00.00",
  listOfTags: tagsData,
};
// createslice

const expenseSlice = createSlice({
  name: "expense/getExpense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<ExpenseProp>) => {
      state.expense.unshift(action.payload);
      localStorage.setItem("expenseData", JSON.stringify(state.expense));
      const totalNum = state.expense.reduce(
        (acc, curr) => acc + Number(curr.price),
        0
      );
      state.total = totalNum.toFixed(2);
      localStorage.setItem("expenseTotal", JSON.stringify(state.total));
    },
    addTags: (state, action: PayloadAction<any>) => {
      state.listOfTags.push(action.payload);
      localStorage.setItem("tags", JSON.stringify(state.listOfTags));
    },
  },
});

export const { addExpense, addTags } = expenseSlice.actions;
export default expenseSlice.reducer;
