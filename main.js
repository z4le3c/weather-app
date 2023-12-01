import { Weather } from "./weather.js"

const toggleMetricB = document.querySelector('.toggle-metric')
let currData

const fetchForcastWeather = async (_location) => {
  let response = await fetch(
  `https://api.weatherapi.com/v1/forecast.json?key=12515910c17845a6a7d30508233011&q=${_location}&days=3`,
  { mode: 'cors' }
  )
  let data = await response.json()
  return data
}

fetchForcastWeather('Mexico City')
.then((data) => {
  console.log(data)
  currData = data
  displayData(data)
})

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

  currData = data
  displayData(data)
})

toggleMetricB.addEventListener('click', () => {
  if (toggleMetricB.textContent === 'switch to ºF') {
    toggleMetricB.textContent = `switch to ºC`
  } else {
    toggleMetricB.textContent = `switch to ºF`
  }

  displayData(currData)
})

const displayData = (data) => {
  const tempDiv = document.querySelector('.temp')
  if (toggleMetricB.textContent === 'switch to ºF') {
    tempDiv.textContent = `${Weather.currTemp(data).c} ºC`
  } else {
    tempDiv.textContent = `${Weather.currTemp(data).f} ºF`
  }

  const nameLoc = document.querySelector('.name-location')
  nameLoc.textContent = Weather.locName(data)
  const currDate = document.querySelector('.curr-date')
  currDate.textContent = Weather.localTime(data)
}