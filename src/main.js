function main () { //weather call params
  const main = document.createElement('div')
  main.id = 'main'

  const today = document.createElement('div')
  today.id = 'today'

  const title = document.createElement('div')
  title.id = 'title'
  let date = document.createElement('h1')
  date.innerHTML = '22 march 2022'
  let dayTime = document.createElement('h3')
  dayTime.innerHTML = 'Saturday 07:00'
  title.appendChild(date)
  title.appendChild(dayTime)

  const info =  document.createElement('div')
  info.id = 'info'

  const weatherNow = document.createElement('div')
  weatherNow.id = 'weather-now'
  let weatherNowImg = document.createElement('img')
  weatherNowImg.id = 'weatheNowImg'
  weatherNowImg.src = 'http://placekitten.com/200/200'
  let weatherNowTxt = document.createElement('h2')
  weatherNowTxt.innerHTML = 'cloudy'
  weatherNow.appendChild(weatherNowImg)
  weatherNow.appendChild(weatherNowTxt)

  const weatherMore = document.createElement('div')

  const temp = document.createElement('div')
  temp.classList.add('weather-more')
  let tempImg = document.createElement('img')
  tempImg.classList.add('weather-more-img')
  tempImg.src = 'http://placekitten.com/100/100'
  let tempTxt = document.createElement('p')
  tempTxt.innerHTML = '13°'
  temp.appendChild(tempImg)
  temp.appendChild(tempTxt)

  const humi = document.createElement('div')
  humi.classList.add('weather-more')
  let humiImg = document.createElement('img')
  humiImg.classList.add('weather-more-img')
  humiImg.src = 'http://placekitten.com/100/100'
  let humiTxt = document.createElement('p')
  humiTxt.innerHTML = '51%'
  humi.appendChild(humiImg)
  humi.appendChild(humiTxt)

  const wind = document.createElement('div')
  wind.classList.add('weather-more')
  let windImg = document.createElement('img')
  windImg.classList.add('weather-more-img')
  windImg.src = 'http://placekitten.com/100/100'
  let windTxt = document.createElement('p')
  windTxt.innerHTML = '5kn'
  wind.appendChild(windImg)
  wind.appendChild(windTxt)

  weatherMore.appendChild(temp)
  weatherMore.appendChild(humi)
  weatherMore.appendChild(wind)

  info.appendChild(weatherNow)
  info.appendChild(weatherMore)

  today.appendChild(title)
  today.appendChild(info)
  main.appendChild(today)

  return main
}

export default main
