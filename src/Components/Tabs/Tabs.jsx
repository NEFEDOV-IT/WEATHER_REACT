import { useState } from "react";
import './Tabs.css'
import { Now } from "./Now/Now";
import { Details } from "./Details/Details";
import { Forecast } from "./Forecast/Forecast";
import { NavigationTab } from "./NavigationTab/NavigationTab";

const Tabs = ({dataCity, dataForecast, setFavouriteCities, favouriteCities, setDataCity, setDataForecast}) => {
  const [active, setActive] = useState('Now')

  return (
    <div className="forest__body-weather">
      <div className="tabs">
        <div className="tabs-block__body">

          <Now
            active={active}
            dataCity={dataCity}
            setFavouriteCities={setFavouriteCities}
            favouriteCities={favouriteCities}
            setDataCity={setDataCity}
            setDataForecast={setDataForecast}
          />
          <Details
            active={active}
            dataCity={dataCity}
          />
          <Forecast
            active={active}
            dataForecast={dataForecast}
            dataCity={dataCity}
          />
        </div>

        <NavigationTab
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  )
}

export { Tabs }
