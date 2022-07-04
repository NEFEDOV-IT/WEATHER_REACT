import './Now.scss'
import img from '../../../img/04d.png'
import { FIRST_CITY, getCityForecast, getForecast, URL } from "../../../helpers";
import { useEffect } from "react";
import JsCookie from "js-cookie";

const Now = ({
               active,
               dataCity,
               setFavouriteCities,
               favouriteCities,
               setDataCity,
               setDataForecast
             }) => {

  useEffect(() => {
    if (JsCookie.get('arrayCity')) {
      const result = JSON.parse(JsCookie.get('arrayCity'))
      setFavouriteCities(result)
    }
  }, [])

  useEffect(() => {
    if (JsCookie.get('city')) {
      const currentCity = JSON.parse(JsCookie.get('city'))

      async function fetchData(currentCity) {
        const data = await getCityForecast(currentCity)
        const dataForecast = await getForecast(currentCity)
        setDataCity(data)
        setDataForecast(dataForecast)
      }

      fetchData(currentCity)
    }
  }, [])

  const currentImage = dataCity ? `${URL.ICON_WEATHER + dataCity.weather[0].icon + '@4x.png'}` : img
  const isFavourite = favouriteCities.includes(dataCity.name || FIRST_CITY.name)

  function addFavouriteCity(e) {
    const checkCity = favouriteCities.includes(dataCity?.name || e.target.value)
    if (checkCity) {
      const result = favouriteCities.filter(city => city !== e.target.value)
      JsCookie.set('arrayCity', JSON.stringify(result))
      JsCookie.set('city', JSON.stringify(result[0] || FIRST_CITY.name))
      setFavouriteCities(result)
    } else if (dataCity) {
      setFavouriteCities([...favouriteCities, dataCity.name])
      JsCookie.set('city', JSON.stringify(dataCity.name))
      JsCookie.set('arrayCity', JSON.stringify([...favouriteCities, dataCity.name]))
    } else {
      setFavouriteCities([...favouriteCities, FIRST_CITY.name])
      JsCookie.set('city', JSON.stringify(FIRST_CITY.name))
      JsCookie.set('arrayCity', JSON.stringify([...favouriteCities, FIRST_CITY.name]))
    }
  }

  return (
    <>
      <div className={active === 'Now' ? "tabs-block__block tabs-block active" : 'tabs-block__block tabs-block'}>
        <div className="weather__temperature">
          <span className="city__temperature">
            {dataCity ? Math.round(dataCity.main.temp) : FIRST_CITY.temp}
          </span>°
        </div>
        <div className="weather__img">
          <img className="city__weather-img" src={currentImage} alt=""/>
        </div>
        <div className="weather__city _city">
          {dataCity.name || FIRST_CITY.name}
        </div>
        <button value={dataCity.name || FIRST_CITY.name} onClick={addFavouriteCity}
             className={isFavourite ? "weather__favorites active" : "weather__favorites"}>
        </button>
      </div>
    </>
  )
}

export { Now }
