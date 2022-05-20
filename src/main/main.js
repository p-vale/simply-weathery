import './main.css'
import mainInfo from './main-info'
import { getDate, unixToDateTime } from '../support-func'

const fullDate = getDate()

function main (data) {
  //title
  let date = document.createElement('h1')
  date.classList.add('upper')
  date.innerHTML = fullDate.titleDate
  let dayTime = document.createElement('h3')
  dayTime.id = 'title-day-time'
  dayTime.innerHTML = `${data.name}, ${fullDate.weekday} UTC ${unixToDateTime(data.dt)}`
  
  const title = document.createElement('div')
  title.id = 'title'
  title.appendChild(date)
  title.appendChild(dayTime)

  //info
  let info = mainInfo(data)

  //sub-container
  const today = document.createElement('div')
  today.id = 'today'
  today.classList.add('hour-color')
  today.appendChild(title)
  today.appendChild(info)

  //conatiner
  const main = document.createElement('div')
  main.id = 'main'
  main.appendChild(today)

  return main
}

export default main
