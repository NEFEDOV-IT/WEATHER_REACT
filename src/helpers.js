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

async function getForecast(url, cityName) {
  try {
    const response = await fetch(getUrl(url, cityName))
    return await response.json()
  } catch (e) {
    alert(e.message)
  }
}

// function deleteAllCookies() {
//   const cookies = document.cookie.split(";");
//
//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i];
//     const eqPos = cookie.indexOf("=");
//     const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//     document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
//   }
// }

// deleteAllCookies()

export { URL, dateConverter, timeConverter, getForecast, getUrl }


