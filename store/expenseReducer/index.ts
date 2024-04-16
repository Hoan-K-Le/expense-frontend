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
}
const storedExpenseData = localStorage.getItem("expenseData");
const expensesData =
  storedExpenseData !== null ? JSON.parse(storedExpenseData) : [];

const storedExpenseTotal = localStorage.getItem("expenseTotal");
const expenseTotal =
  storedExpenseTotal !== null ? JSON.parse(storedExpenseTotal) : [];

// initialState
// price, date, tag
const initialState: ExpenseState = {
  expense: expensesData,
  total: expenseTotal,
};
// createslice

const expenseSlice = createSlice({
  name: "expense/getExpense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<ExpenseProp>) => {
      state.expense.unshift(action.payload);
      localStorage.setItem("expenseData", JSON.stringify(state.expense));
      state.total = state.expense
        .reduce((acc, curr) => acc + Number(curr.price), 0)
        .toString();
      localStorage.setItem("expenseTotal", JSON.stringify(state.total));
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
