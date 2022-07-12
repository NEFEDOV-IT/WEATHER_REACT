import { actionCreator } from "./index";

const ADD_CITY = 'ADD CITY'
const REMOVE_CITY = 'REMOVE CITY'
const SHOW_CITY = 'SHOW CITY'
const SHOW_CITIES = 'SHOW CITIES'

const ADD_DATA_CITY = 'ADD DATA CITY'
const ADD_DATA_FORECAST = 'ADD DATA FORECAST'

const addCity = actionCreator(ADD_CITY)
const removeFavouriteCity = actionCreator(REMOVE_CITY)
const showCity = actionCreator(SHOW_CITY)
const showCities = actionCreator(SHOW_CITIES)

const addDataCity = actionCreator(ADD_DATA_CITY)
const addDataForecast = actionCreator(ADD_DATA_FORECAST)

export {
  addDataForecast,
  addDataCity,
  showCities,
  addCity,
  removeFavouriteCity,
  showCity,
  SHOW_CITIES,
  ADD_CITY,
  REMOVE_CITY,
  SHOW_CITY,
  ADD_DATA_CITY,
  ADD_DATA_FORECAST
}
