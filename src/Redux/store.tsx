import { configureStore, combineReducers } from "@reduxjs/toolkit";
import waitingListReducer from "./Waiting/waitingList";
import { useDispatch, useSelector } from "react-redux";
import { api } from "./api";
import { userSlice } from "./user/slice";

const rootReducer = combineReducers({
  waitingList: waitingListReducer,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = <T,>(selector: (state: RootState) => T) => {
  return useSelector(selector);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useUserSelector = () => useAppSelector((state) => state.user);
