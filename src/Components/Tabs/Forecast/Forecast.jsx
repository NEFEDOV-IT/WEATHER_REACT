import './Forecast.scss'
import { FIRST_CITY } from "../../../helpers";
import { ShowListForecast } from "./ShowListForecast";

const Forecast = ({active, dataCity, dataForecast}) => {

  return (
    <>
      <div className={active === 'Forecast' ? "tabs-block__block tabs-block active" : 'tabs-block__block tabs-block'}>
        <div className="info__city-cloud">

          <div className="cloud-city _city">
            {dataCity ? dataCity.name : FIRST_CITY.name}
          </div>

          <div className="cloud-city-info">
            {dataForecast?.list?.map((item, index) => {
              return (
                <ShowListForecast
                  data={item}
                  key={index}
                  i={index}
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
