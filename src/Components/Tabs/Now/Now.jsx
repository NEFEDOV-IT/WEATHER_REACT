import './Now.css'
import img from '../../../img/04d.png'
import { URL } from "../../../utils/helpers";
import { useEffect } from "react";
import JsCookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addCity, removeFavouriteCity, showCities, showCity } from "../../../store/weatherCitiesSlice";
import { fetchDataCity, fetchDataForecast } from "../../../store/asyncActions";
import { getCities, getCurrentCity, getCurrentTemp, getDataCity, getIsFetching } from "../../../utils/selectors";

const Now = ({ activeTab }) => {

  useEffect(() => {
    if (JsCookie.get('arrayCity')) {
      const result = JSON.parse(JsCookie.get('arrayCity'))
      dispatch(showCities(result))
    }
  }, [])

  useEffect(() => {
    if (JsCookie.get('city')) {
      const currentCity = JSON.parse(JsCookie.get('city'))
      dispatch(showCity(currentCity))
      dispatch(fetchDataCity(currentCity, URL.SERVER))
      dispatch(fetchDataForecast(currentCity, URL.SERVER_FORECAST))
    }
  }, [])

  const dataCity = useSelector(getDataCity)
  const currentCity = useSelector(getCurrentCity)
  const currentTemp = useSelector(getCurrentTemp)
  const cities = useSelector(getCities)
  const isFetching = useSelector(getIsFetching)
  const dispatch = useDispatch()

  const currentImage = dataCity.weather ? `${URL.ICON_WEATHER + dataCity.weather[0].icon + '@4x.png'}` : img
  const isFavourite = cities.includes(currentCity)

  function addFavouriteCity() {
    if (isFavourite) {
      const result = cities.filter(city => city !== currentCity)
      dispatch(removeFavouriteCity(currentCity))
      dispatch(showCity(result[0] || currentCity))
      JsCookie.set('city', JSON.stringify(result[0] || currentCity))
      JsCookie.set('arrayCity', JSON.stringify(result))
    } else {
      dispatch(addCity(currentCity))
      JsCookie.set('city', JSON.stringify(currentCity))
      JsCookie.set('arrayCity', JSON.stringify([...cities, currentCity]))
    }
  }

  return (
    <>
      <div className={activeTab === 'Now' ? "tabs-block__block tabs-block active" : 'tabs-block__block tabs-block'}>
        {
          isFetching === false ?
            <>
              <div className="weather__temperature">
                <span className="city__temperature">
                  {Math.round(dataCity?.main?.temp) || currentTemp}
                </span>°
              </div>
              <div className="weather__img">
                <img className="city__weather-img" src={currentImage} alt=""/>
              </div>
              <div className="weather__city _city">
                {currentCity}
              </div>
              <button
                value={currentCity} onClick={addFavouriteCity}
                className={isFavourite ? "weather__favorites active" : "weather__favorites"}>
              </button>
            </>
            :
            <span className={'fetch__animation'}></span>
        }
      </div>
    </>
  )
}

export { Now }
