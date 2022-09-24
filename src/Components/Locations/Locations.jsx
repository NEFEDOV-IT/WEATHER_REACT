import './Locations.css'
import { ShowFavouriteCities } from "./ShowFavouriteCities";
import { useSelector } from "react-redux";
import { getCities } from "../../utils/selectors";

const Locations = () => {
  const cities = useSelector(getCities)

  return (
    <div className="forest__body-location">
      <div className="location__add">
        Added Locations:
      </div>
      <div className="location__locations">
        <ul className="location__locations-list">
          {cities && cities.map((city, index) => {
            return <ShowFavouriteCities
              key={index}
              city={city}
            />
          })}
        </ul>
      </div>
    </div>
  )
}

export { Locations }
