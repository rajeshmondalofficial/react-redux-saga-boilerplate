import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authSlice from "./authSlice";

const mySaga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: [mySaga],
});
