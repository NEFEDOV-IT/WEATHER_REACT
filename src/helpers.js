const FIRST_CITY = {
  name: 'Aktobe',
  temp: 7,
}

const URL = {
  SERVER: 'https://api.openweathermap.org/data/2.5/weather',
  APIKEY: '9ef705670e05a7f36d295b686608964c\n&units=metric',
  ICON_WEATHER: 'https://openweathermap.org/img/wn/',
  SERVER_FORECAST: 'https://api.openweathermap.org/data/2.5/forecast'
}

const dateConverter = (data) => {
  const DATE_DATA = new Date(data * 1000)
  const month = DATE_DATA.toLocaleString('en', {month: 'long'})
  return DATE_DATA.getDate() + ' ' + month
}

const timeConverter = (data) => {
  const TIME_DATA = new Date(data * 1000)
  let hour = TIME_DATA.getHours()
  let min = TIME_DATA.getMinutes()
  min = (min < 10) ? '0' + min : min
  hour = (hour < 10) ? '0' + hour : hour
  return hour + ':' + min
}

function getUrl(url, cityName) {
  return `${url}?q=${cityName}&appid=${URL.APIKEY}`
}

async function getCityForecast(cityName) {
  try {
    const response = await fetch(getUrl(URL.SERVER, cityName))
    return await response.json()
  } catch (e) {
    alert(e.message)
  }
}

async function getForecast(cityName) {
  try {
    const response = await fetch(getUrl(URL.SERVER_FORECAST, cityName))
    return await response.json()
  } catch (e) {
    alert(e.message)
  }
}

export { URL, dateConverter, timeConverter, FIRST_CITY, getCityForecast, getForecast }


