import './Now.scss'
import img from '../../../img/04d.png'
import { FIRST_CITY, URL } from "../../../helpers";

const Now = ({active, dataCity, setFavouriteCities, favouriteCities}) => {
  const currentImage = dataCity ? `${URL.ICON_WEATHER + dataCity.weather[0].icon + '@4x.png'}` : img
  const isFavourite = favouriteCities.includes(dataCity.name || FIRST_CITY.name)

  function addFavouriteCity() {
    const checkCity = favouriteCities.includes(dataCity?.name)
    if (checkCity) {
      const result = favouriteCities.filter(city => city !== dataCity.name)
      setFavouriteCities(result)
    } else if (dataCity) {
      setFavouriteCities([...favouriteCities, dataCity.name])
    } else setFavouriteCities([...favouriteCities, FIRST_CITY.name])
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
        <div onClick={addFavouriteCity}
             className={isFavourite ? "weather__favorites active" : "weather__favorites"}></div>
      </div>
    </>
  )
}

export { Now }
