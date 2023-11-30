import { Weather } from "./weather.js"

const fetchForcastWeather = async (_location) => {
  let response = await fetch(
  `https://api.weatherapi.com/v1/forecast.json?key=12515910c17845a6a7d30508233011&q=${_location}&days=3`,
  { mode: 'cors' }
  )
  let data = await response.json()
  return data
}

// fetchForcastWeather('Mexico City')

const searchButton = document.querySelector('#search-button')
searchButton.addEventListener('click', async () => {
  const inErrorMessage = document.querySelector('.error-message')
  inErrorMessage.textContent = ''
  const weatherLocInput = document.querySelector('#weather-location')
  if (weatherLocInput.value === '') return
  
  let data = await fetchForcastWeather(weatherLocInput.value)
  if (data.error) {
    inErrorMessage.textContent = data.error.message
    return
  }

  console.log(data)
})