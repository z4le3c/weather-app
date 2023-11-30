import { Weather } from "./weather.js"

const fetchForcastWeather = async (_location) => {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=12515910c17845a6a7d30508233011&q=${_location}&days=3`,
    { mode: 'cors' }
  )
  let data = await response.json()
  console.log(data)
  console.log(`Celsius: ${Weather.currTemp(data).c}`)
  console.log(`Fahrenheit: ${Weather.currTemp(data).f}`)
  console.log(`Min Celsius: ${Weather.currMinTemp(data).c}`)
  console.log(`Min Fahrenheit: ${Weather.currMinTemp(data).f}`)
  console.log(`Wind k: ${Weather.currWindSpeed(data).k}`)
}

fetchForcastWeather('Mexico City')