import main from './main/main.js'
import forecast from './forecast/forecast.js'
import { makeData, makeDataList } from './support-func'

function component (id) {
  const container = document.createElement('div')
  container.id = 'container'
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=14772d2100c0f1e02315562e46c1ba6f`, { mode : 'cors' })
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

  fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=14772d2100c0f1e02315562e46c1ba6f`, { mode : 'cors' })
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

export default component