import './FormSubmit.css'
import { getForecast, URL } from "../../helpers";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataCity, fetchDataForecast } from "../../storeToolkit/asyncActions";
import { showCity } from "../../storeToolkit/weatherCitiesSlice";

const FormSubmit = () => {
  const [error, setError] = useState(false)
  const [city, setCity] = useState('')
  const dispatch = useDispatch()

  function saveCity(e) {
    setCity(e.target.value)
  }

  async function formSubmit(e) {
    e.preventDefault()
    const isNotEmptyCity = /^[а-яА-Яa-zA-Z- ]+$/.test(city.trim())
    const currentCity = city[0].toUpperCase() + city.slice(1)

    if (!isNotEmptyCity) {
      setError(true)
      setCity('')
    } else {
      try {
        const data = await getForecast(URL.SERVER, city)
        if (error) setError(false)
        if (data.cod !== '404') {
          dispatch(showCity(currentCity))
          dispatch(fetchDataCity(city, URL.SERVER))
          dispatch(fetchDataForecast(city, URL.SERVER_FORECAST))
        }
        setCity('')
      } catch (e) {
        setError(true)
        setCity('')
        alert(e.message)
      }
    }
  }

  return (
    <>
      <form onSubmit={formSubmit} className="forest__form">
        <label htmlFor="input_id"></label>
        <input value={city} onChange={saveCity} placeholder="Please enter the city" id="input_id" type="text"
               className={error ? "forest__input error" : "forest__input"}/>
        <button className="button__search"/>
      </form>
    </>
  )
}

export { FormSubmit }
