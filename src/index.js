import './style.css'
import main from './main.js'
import forecast from './forecast.js'

function component () {
  const container = document.createElement('div')
  container.id = 'container'
  let data = {}
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=14772d2100c0f1e02315562e46c1ba6f', { mode : 'cors' })
  .then(function(response) {
    return response.json()
  .then(function(response) {
    let x = JSON.parse(JSON.stringify(response))
    data.weather = x.weather[0].main
    data.descr = x.weather[0].description
    data.temp = x.main.temp
    data.humi = x.main.humidity
    data.wind = x.wind.speed
    data.name = x.name
    data.dt = x.dt

    container.appendChild(main(data))
    container.appendChild(forecast(data))
  })
  })
  .catch(function(err) {
  console.log(err)
  })
  return container
}

 document.body.appendChild(component())