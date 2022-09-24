import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import weatherCitiesSlice from "./weatherCitiesSlice";
import weatherDataSlice from "./weatherDataSlice";

const rootReducer = combineReducers({
  city: weatherCitiesSlice,
  data: weatherDataSlice
})

export const store = configureStore({
  reducer: rootReducer
})
