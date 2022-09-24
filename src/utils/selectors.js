const getCities = state => state.city.cities;
const getCurrentCity = state => state.city.city
const getCurrentTemp = state => state.city.temp
const getDataCity = state => state.data.dataCity
const getDataForecast = state => state.data.dataForecast
const getIsFetching = state => state.data.isFetching


export { getCities, getCurrentCity, getCurrentTemp, getDataCity, getDataForecast, getIsFetching }