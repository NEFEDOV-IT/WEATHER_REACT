import { addDataCity, addDataForecast } from "./actions";
import { getUrl, URL } from "../helpers";

const fetchDataCity = (cityName) => {
  return dispatch => {
    fetch(getUrl(URL.SERVER, cityName))
      .then(response => response.json())
      .then(data => {
        dispatch(addDataCity(data))
      })
  }
}

const fetchDataForecast = (cityName) => {
  return dispatch => {
    fetch(getUrl(URL.SERVER_FORECAST, cityName))
      .then(response => response.json())
      .then(data => {
        dispatch(addDataForecast(data))
      })
  }
}

export { fetchDataCity, fetchDataForecast }
