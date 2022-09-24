import './Details.css'
import { timeConverter } from "../../../utils/helpers";
import { useSelector } from "react-redux";
import { getCurrentCity, getCurrentTemp, getDataCity } from "../../../utils/selectors";

const Details = ({ active }) => {
  const currentCity = useSelector(getCurrentCity)
  const currentTemp = useSelector(getCurrentTemp)
  const dataCity = useSelector(getDataCity)

  return (
    <>
      <div className={active === 'Details' ? "tabs-block__block tabs-block active" : 'tabs-block__block tabs-block'}>
        <div className="city__body">
          <div className="city _city">
            {currentCity}
          </div>
          <ul className="city__info">
            <li className="temperature">
              Temperature: <span className="city__temperature">
              {Math.round(dataCity?.main?.temp) || currentTemp}
            </span>°
            </li>
            <li className="feels">
              Feels like: <span className="feels__like">
              {Math.round(dataCity?.main?.feels_like) || 10}
            </span>°
            </li>
            <li className="weather">
              Weather: <span className="city__weather">
               {dataCity.main ? dataCity.weather[0].main : 'Clouds'}
            </span>
            </li>
            <li className="sunrise">
              Sunrise: <span className="city__sunrise">
              {dataCity.sys ? timeConverter(dataCity.sys.sunrise) : '03:21'}
            </span>
            </li>
            <li className="sunset">
              Sunset: <span className="city__sunset">
              {dataCity.sys ? timeConverter(dataCity.sys.sunset) : '18:54'}
            </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export { Details }
