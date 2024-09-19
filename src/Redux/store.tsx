import { configureStore, combineReducers } from "@reduxjs/toolkit";
import waitingListReducer from "./Waiting/waitingList";
import { useDispatch, useSelector } from "react-redux";
import { api } from "./api";
import { userSlice } from "./user/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // Only persist the user slice
};

const rootReducer = combineReducers({
  waitingList: waitingListReducer,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = <T,>(selector: (state: RootState) => T) => {
  return useSelector(selector);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useUserSelector = () => useAppSelector((state) => state.user);
