import { FormSubmit } from "../FormSubmit/FormSubmit";
import { Tabs } from "../Tabs/Tabs";
import { Locations } from "../Locations/Locations";
import './Main.scss'
import { useState } from "react";

const Main = () => {
  const [city, setCity] = useState('')
  const [dataCity, setDataCity] = useState('')
  const [dataForecast, setDataForecast] = useState('')
  const [favouriteCities, setFavouriteCities] = useState([])

  return (
    <main className="main">
      <div className="container">
        <div className="weather__forest">

          <FormSubmit
            city={city}
            setCity={setCity}
            setDataCity={setDataCity}
            setDataForecast={setDataForecast}
          />

          <div className="forest__body">

            <Tabs
              dataCity={dataCity}
              dataForecast={dataForecast}
              setFavouriteCities={setFavouriteCities}
              favouriteCities={favouriteCities}
            />
            <Locations
              favouriteCities={favouriteCities}
              setFavouriteCities={setFavouriteCities}
              setDataCity={setDataCity}
              setDataForecast={setDataForecast}
            />

          </div>
        </div>
      </div>
    </main>
  )
}

export { Main }
