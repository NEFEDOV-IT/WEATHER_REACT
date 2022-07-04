import './Locations.scss'
import { ShowFavouriteCities } from "./ShowFavouriteCities";

const Locations = ({setFavouriteCities, favouriteCities, setDataCity, setDataForecast}) => {

  return (
    <div className="forest__body-location">
      <div className="location__add">
        Added Locations:
      </div>
      <div className="location__locations">
        <ul className="location__locations-list">
          {favouriteCities?.map((city, index) => {
            return <ShowFavouriteCities
              key={index}
              city={city}
              setFavouriteCities={setFavouriteCities}
              favouriteCities={favouriteCities}
              setDataCity={setDataCity}
              setDataForecast={setDataForecast}
            />
          })}
        </ul>
      </div>
    </div>
  )
}

export { Locations }
