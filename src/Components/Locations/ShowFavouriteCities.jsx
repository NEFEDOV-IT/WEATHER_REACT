import { getCityForecast, getForecast } from "../../helpers";

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
  }

  async function showForecast(e) {
    const data = await getCityForecast(e.target.innerText)
    const dataForecast = await getForecast(e.target.innerText)
    setDataCity(data)
    setDataForecast(dataForecast)
  }

  return (
    <li className="list-li">
      <div onClick={showForecast} className="li-location">{city}</div>
      <button value={city} onClick={removeCity} className="li-close">&#65794;</button>
    </li>
  )
}

export { ShowFavouriteCities }
