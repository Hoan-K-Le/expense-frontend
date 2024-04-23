import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import expenseReducer from "./expenseReducer";
import darkModeReducer from "./darkModeReducer";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
