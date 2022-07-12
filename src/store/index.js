import { applyMiddleware, combineReducers, createStore } from "redux";
import { weatherCities } from "./weatherCities";
import thunk from "redux-thunk";
import { weatherData } from "./weatherData";

const actionCreator = (type) => (payload) => {
  return {
    type,
    payload,
  }
}

const weatherApp = combineReducers({
  city: weatherCities,
  data: weatherData
})

const weather = createStore(weatherApp, applyMiddleware(thunk))

export { weather, actionCreator }
