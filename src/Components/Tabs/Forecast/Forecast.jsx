import './Forecast.css'
import { ShowListForecast } from "./ShowListForecast";
import { useSelector } from "react-redux";

const Forecast = ({active}) => {
  const currentCity = useSelector(state => state.city.city)
  const dataForecast = useSelector(state => state.data.dataForecast)

  return (
    <>
      <div className={active === 'Forecast' ? "tabs-block__block tabs-block active" : 'tabs-block__block tabs-block'}>
        <div className="info__city-cloud">

          <div className="cloud-city _city">
            {currentCity}
          </div>

          <div className="cloud-city-info">
            {dataForecast && dataForecast?.list?.map((item, index) => {
              return (
                <ShowListForecast
                  data={item}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export { Forecast }
