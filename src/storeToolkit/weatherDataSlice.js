import { createSlice } from "@reduxjs/toolkit";

const weatherData = createSlice({
  name: 'weather data',
  initialState: {
    dataCity: {},
    dataForecast: {},
    isFetching: false,
  },
  reducers: {
    addDataCity(state, action) {
      state.dataCity = action.payload
    },
    addDataForecast(state, action) {
      state.dataForecast = action.payload
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload
    }
  }
})

export default weatherData.reducer
export const {addDataCity, addDataForecast, setIsFetching} = weatherData.actions
