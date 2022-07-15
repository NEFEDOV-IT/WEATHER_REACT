import { createSlice } from "@reduxjs/toolkit";

const weatherCitiesSlice = createSlice({
  name: 'weather city',
  initialState: {
    city: 'Nizhny Novgorod',
    temp: 7,
    cities: [],
  },
  reducers: {
    addCity(state, action) {
      state.cities.push(action.payload)
    },
    removeFavouriteCity(state, action) {
      state.cities = state.cities.filter(city => city !== action.payload)
    },
    showCity(state, action) {
      state.city = action.payload
    },
    showCities(state, action) {
      state.cities = action.payload
    }
  }
})

export default weatherCitiesSlice.reducer
export const {addCity, removeFavouriteCity, showCity, showCities} = weatherCitiesSlice.actions
