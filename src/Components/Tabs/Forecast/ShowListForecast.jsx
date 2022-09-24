import img from "../../../img/04n.png";
import { dateConverter, timeConverter, URL } from "../../../utils/helpers";

const ShowListForecast = ({data}) => {
  const currentImg = URL.ICON_WEATHER + data.weather[0].icon + '.png'

  return (
    <div className="cloud-city__item">
      <div className="city-info__date">
        {dateConverter(data.dt)}
      </div>
      <div className="city-info__time">
        {timeConverter(data.dt)}
      </div>
      <div className="city-info__body">
        <div className="city-info__temperature">
          Temperature: <span>
          {Math.round(data.main.temp)}
        </span>°
        </div>
        <div className="city-info-feels">
          Feels like: <span>
          {Math.round(data.main.feels_like)}
        </span>°
        </div>
      </div>
      <div className="city-info__cloud">
        <div className="city-info__cloud-name">
          {data.weather[0].main}
        </div>
        <div className="city-info__cloud-img">
          <img src={currentImg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export { ShowListForecast }
