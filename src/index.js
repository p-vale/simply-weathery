import './style.css'
import main from './main.js'
import forecast from './forecast.js'
import { makeData, makeDataList } from './support-func'

function component () {
  const container = document.createElement('div')
  container.id = 'container'
  
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=14772d2100c0f1e02315562e46c1ba6f', { mode : 'cors' })
  .then(function(response) {
    return response.json()
  .then(function(response) {
    let x = JSON.parse(JSON.stringify(response))
    let data = makeData(x)

    container.appendChild(main(data))
  })
  })
  .catch(function(err) {
  console.log(err)
  })

  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=14772d2100c0f1e02315562e46c1ba6f', { mode : 'cors' })
  .then(function(response) {
    return response.json()
  .then(function(response) {
    let y = JSON.parse(JSON.stringify(response))
    y = y.list
    let dataList = makeDataList(y)

    container.appendChild(forecast(dataList))
  })
  })
  .catch(function(err) {
  console.log(err)
  })

  return container
}

 document.body.appendChild(component())