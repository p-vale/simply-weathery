import './main.css'
import mainInfo from './main-info'
import search from './search'

function main (data) {
  // does not wait promise
  // rething components structure and interactions
  const todayData = search()
  console.log(todayData.temp)

  const main = document.createElement('div')
  main.id = 'main'

  const today = document.createElement('div')
  today.id = 'today'

  const title = document.createElement('div')
  title.id = 'title'
  let date = document.createElement('h1')
  date.innerHTML = '22 march 2022'
  let dayTime = document.createElement('h3')
  dayTime.innerHTML = `${todayData.name}, Saturday 07:00`
  title.appendChild(date)
  title.appendChild(dayTime)

  let info = mainInfo()

  today.appendChild(title)
  today.appendChild(info)
  main.appendChild(today)

  return main
}

export default main
