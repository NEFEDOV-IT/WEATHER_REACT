import { ADD_CITY, REMOVE_CITY, SHOW_CITIES, SHOW_CITY } from "./actions";

const defaultState = {
  city: 'Nizhny Novgorod',
  temp: 7,
  cities: [],
}

const weatherCities = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_CITY:
      return {...state, city: action.payload}
    case ADD_CITY:
      return {...state, cities: [...state.cities, action.payload]}
    case REMOVE_CITY:
      return {...state, cities: state.cities.filter(item => item !== action.payload)}
    case SHOW_CITIES:
      return {...state, cities: action.payload}
    default:
      return state
  }
}

export { weatherCities }
