import { getUrl, URL } from "../utils/helpers";
import { addDataCity, addDataForecast, setIsFetching } from "./weatherDataSlice";


const fetchDataCity = (cityName) => {
  return dispatch => {
    dispatch(setIsFetching(true))
    fetch(getUrl(URL.SERVER, cityName))
      .then(response => response.json())
      .then(data => dispatch(addDataCity(data)))
      .finally(() => dispatch(setIsFetching(false)))
      .catch(e => console.log(e.message))
  }
}

const fetchDataForecast = (cityName) => {
  return dispatch => {
    fetch(getUrl(URL.SERVER_FORECAST, cityName))
      .then(response => response.json())
      .then(data => dispatch(addDataForecast(data)))
      .catch(e => console.log(e.message))
  }
}

export { fetchDataCity, fetchDataForecast }
