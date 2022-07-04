import './FormSubmit.scss'
import { getCityForecast, getForecast } from "../../helpers";
import { useState } from "react";

const FormSubmit = ({city, setCity, setDataCity, setDataForecast}) => {
  const [error, setError] = useState(false)

  function saveCity(e) {
    setCity(e.target.value)
  }

  async function HandleSubmit(e) {
    e.preventDefault()
    const isEmptyCity = /^[а-яА-Яa-zA-Z- ]+$/.test(city.trim())
    if (!isEmptyCity) {
      setError(true)
      setCity('')
    } else {
      try {
        const data = await getCityForecast(city)
        const dataForecast = await getForecast(city)
        if (data.cod === '404') {
          alert(data.message)
          setError(true)
          setCity('')
        } else {
          setError(false)
          setDataCity(data)
          setDataForecast(dataForecast)
          setCity('')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }

  return (
    <>
      <form onSubmit={HandleSubmit} className="forest__form">
        <label htmlFor="input_id"></label>
        <input value={city} onChange={saveCity} placeholder="Please enter the city" id="input_id" type="text"
               className={error ? "forest__input error" : "forest__input"}/>
        <button className="button__search"/>
      </form>
    </>
  )
}

export { FormSubmit }
