import { configureStore, combineReducers } from "@reduxjs/toolkit";
import waitingListReducer from './Waiting/waitingList'

const rootReducer = combineReducers({
 waitingList: waitingListReducer

});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
