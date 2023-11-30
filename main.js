const fetchForcastWeather = async (_location) => {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=12515910c17845a6a7d30508233011&q=${_location}&days=3`,
    { mode: 'cors' }
  )
  response = await response.json()
  console.log(response)
}

fetchForcastWeather('Mexico City')