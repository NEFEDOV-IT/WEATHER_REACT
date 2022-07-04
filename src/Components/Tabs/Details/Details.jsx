import './Details.scss'
import { FIRST_CITY, timeConverter } from "../../../helpers";

const Details = ({active, dataCity}) => {
  return (
    <>
      <div className={active === 'Details' ? "tabs-block__block tabs-block active" : 'tabs-block__block tabs-block'}>
        <div className="city__body">
          <div className="city _city">
            {dataCity.name || FIRST_CITY.name}
          </div>
          <ul className="city__info">
            <li className="temperature">
              Temperature: <span className="city__temperature">
              {dataCity ? Math.round(dataCity.main.temp) : FIRST_CITY.temp}
            </span>°
            </li>
            <li className="feels">
              Feels like: <span className="feels__like">
              {dataCity ? Math.round(dataCity.main.feels_like) : 10}
            </span>°
            </li>
            <li className="weather">
              Weather: <span className="city__weather">
               {dataCity ? dataCity.weather[0].main : 'Clouds'}
            </span>
            </li>
            <li className="sunrise">
              Sunrise: <span className="city__sunrise">
              {dataCity ? timeConverter(dataCity.sys.sunrise) : '03:21'}
            </span>
            </li>
            <li className="sunset">
              Sunset: <span className="city__sunset">
              {dataCity ? timeConverter(dataCity.sys.sunset) : '18:54'}
            </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export { Details }
