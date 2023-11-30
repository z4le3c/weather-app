const Weather = {}

Weather.currTemp = (data) => {
  return {c:data.current.temp_c, f:data.current.temp_f}
}

Weather.currHumidity = (data) => {
  return data.current.humidity
}

Weather.currMinTemp = (data) => {
  let day = data.forecast.forecastday[0].day
  return {c:day.mintemp_c, f: day.mintemp_f}
}

Weather.currMaxTemp = (data) => {
  let day = data.forecast.forecastday[0].day
  return {c:day.maxtemp_c, f: day.maxtemp_f}
}

Weather.currWindSpeed = (data) => {
  return {k:data.current.wind_kph, m:data.current.wind_mph}
}

Weather.currFeelsLike = (data) => {
  return {c:data.current.feelslike_c, f:data.current.feelslike_f}
}

Weather.localTime = (data) => {
  return data.location.localTime
}

Weather.isDay = (data) => {
  return data.current.is_day
}

Weather.forecastDay = (data, day) => {
  return data.forecast.forecastday[day]
}

Weather.dailyChanceOfRain = (dayData) => {
  return dayData.day.daily_chance_of_rain
}

Weather.dailyMinTemp = (dayData) => {
  return {c:dayData.day.mintemp_c, f:dayData.day.mintemp_f}
}

Weather.dailyMaxTemp = (dayData) => {
  return {c:dayData.day.maxtemp_c, f:dayData.day.maxtemp_f}
}

Weather.hourlyTemp = (dayData, hour) => {
  return {c:dayData.hour[hour].temp_c, f:dayData.hour[hour].temp_f}
}

export {Weather}