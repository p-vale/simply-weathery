function mainInfo (data) {

  //now
  let weatherNowImg = document.createElement('img')
  weatherNowImg.id = 'weatheNowImg'
  weatherNowImg.src = 'http://placekitten.com/200/200'
  let weatherNowTxt = document.createElement('h2')
  weatherNowTxt.innerHTML = data.descr

  const weatherNow = document.createElement('div')
  weatherNow.id = 'weather-now'
  weatherNow.appendChild(weatherNowImg)
  weatherNow.appendChild(weatherNowTxt)

  //more
  const temp = document.createElement('div')
  temp.classList.add('weather-more')
  let tempImg = document.createElement('img')
  tempImg.classList.add('weather-more-img')
  tempImg.src = 'http://placekitten.com/100/100'
  let tempTxt = document.createElement('p')
  tempTxt.innerHTML = `${data.temp}° C`
  temp.appendChild(tempImg)
  temp.appendChild(tempTxt)

  const humi = document.createElement('div')
  humi.classList.add('weather-more')
  let humiImg = document.createElement('img')
  humiImg.classList.add('weather-more-img')
  humiImg.src = 'http://placekitten.com/100/100'
  let humiTxt = document.createElement('p')
  humiTxt.innerHTML = `${data.humi}%`
  humi.appendChild(humiImg)
  humi.appendChild(humiTxt)

  const wind = document.createElement('div')
  wind.classList.add('weather-more')
  let windImg = document.createElement('img')
  windImg.classList.add('weather-more-img')
  windImg.src = 'http://placekitten.com/100/100'
  let windTxt = document.createElement('p')
  windTxt.innerHTML = `${data.wind} m/s`
  wind.appendChild(windImg)
  wind.appendChild(windTxt)

  const weatherMore = document.createElement('div')
  weatherMore.appendChild(temp)
  weatherMore.appendChild(humi)
  weatherMore.appendChild(wind)

  //container
  const info =  document.createElement('div')
  info.id = 'info'
  info.appendChild(weatherNow)
  info.appendChild(weatherMore)

  return info
}

export default mainInfo
