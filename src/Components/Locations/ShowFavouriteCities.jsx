import { FIRST_CITY, getCityForecast, getForecast } from "../../helpers";
import JsCookie from "js-cookie";

const ShowFavouriteCities = ({
                               city,
                               favouriteCities,
                               setFavouriteCities,
                               setDataCity,
                               setDataForecast
                             }) => {

  function removeCity(e) {
    const currentCities = favouriteCities.filter(item => item !== e.target.value)
    setFavouriteCities(currentCities)
    JsCookie.set('arrayCity', JSON.stringify(currentCities))
    JsCookie.set('city', JSON.stringify(currentCities[0] || FIRST_CITY.name))
  }

  async function showForecast() {
    const data = await getCityForecast(city)
    const dataForecast = await getForecast(city)
    setDataCity(data)
    setDataForecast(dataForecast)
    JsCookie.set('city', JSON.stringify(city))
  }

  return (
    <li className="list-li">
      <div onClick={showForecast} className="li-location">{city}</div>
      <button value={city} onClick={removeCity} className="li-close">&#65794;</button>
    </li>
  )
}

export { ShowFavouriteCities }
