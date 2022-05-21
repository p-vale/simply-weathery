import main from './main/main.js'
import forecast from './forecast/forecast.js'
import { handleError, makeData, makeDataList, styler } from './support-func'

function component (city) {
  const container = document.createElement('div')
  container.id = 'container'

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14772d2100c0f1e02315562e46c1ba6f`, { mode : 'cors' })
  .then(function(response) {
    return response.json()
    .then(function(response) {
      let x = JSON.parse(JSON.stringify(response))
      let data = makeData(x)
      console.log(data)

      styler(data.dt)
      container.appendChild(main(data))
    })
  })
  .catch(function(err) {
    console.log(err)
    container.appendChild(handleError(city))
  })

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=14772d2100c0f1e02315562e46c1ba6f`, { mode : 'cors' })
  .then(function(response) {
    return response.json()
    .then(function(response) {
      let y = JSON.parse(JSON.stringify(response))
      y = y.list
      let dataList = makeDataList(y)
      console.log(dataList)

      container.appendChild(forecast(dataList))
    })
  })
  .catch(function(err) {
    console.log(err)
  })

  return container
}

export default component