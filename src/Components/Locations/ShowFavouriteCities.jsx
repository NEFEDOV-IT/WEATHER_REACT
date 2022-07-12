import { URL } from "../../helpers";
import JsCookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { removeFavouriteCity, showCity } from "../../store/actions";
import { fetchDataCity, fetchDataForecast } from "../../store/asyncActions";

const ShowFavouriteCities = ({city}) => {

  const currentCity = useSelector(state => state.city.city)
  const cities = useSelector(state => state.city.cities)
  const dispatch = useDispatch()

  function removeCity() {
    const currentCities = cities.filter(item => item !== city)
    dispatch(removeFavouriteCity(city))
    dispatch(showCity(currentCities[0] || currentCity))
    JsCookie.set('city', JSON.stringify(currentCities[0] || currentCity))
    JsCookie.set('arrayCity', JSON.stringify(currentCities))
  }

  async function showForecast() {
    dispatch(showCity(city))
    dispatch(fetchDataCity(city, URL.SERVER))
    dispatch(fetchDataForecast(city, URL.SERVER))
    JsCookie.set('city', JSON.stringify(city))
  }

  return (
    <li className="list-li">
      <div onClick={showForecast} className="li-location">{city}</div>
      <button onClick={removeCity} className="li-close">&#65794;</button>
    </li>
  )
}

export { ShowFavouriteCities }
