import { ADD_DATA_CITY, ADD_DATA_FORECAST } from "./actions";

const defaultState = {
  dataCity: {},
  dataForecast: {},
}

const weatherData = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA_CITY:
      return {...state, dataCity: {...action.payload}}
    case ADD_DATA_FORECAST:
      return {...state, dataForecast: {...action.payload}}
    default:
      return state
  }
}

export { weatherData }
