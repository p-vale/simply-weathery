import './main.css'
import mainInfo from './main-info'

function unixToDateTime(unix) {
  var date = new Date(unix * 1000)
  var hours = date.getHours()
  var minutes = "0" + date.getMinutes()
  return hours + ':' + minutes.slice(-2)
}

function main (data) {

  const main = document.createElement('div')
  main.id = 'main'

  const today = document.createElement('div')
  today.id = 'today'

  const title = document.createElement('div')
  title.id = 'title'
  let date = document.createElement('h1')
  date.innerHTML = '22 march 2022' //get today date
  let dayTime = document.createElement('h3')
  dayTime.innerHTML = `${data.name}, UTC ${unixToDateTime(data.dt)}`
  title.appendChild(date)
  title.appendChild(dayTime)

  let info = mainInfo() //pass data and make interactive

  today.appendChild(title)
  today.appendChild(info)
  main.appendChild(today)

  return main
}

export default main
