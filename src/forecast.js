import './forecast.css'
import forecastCards from './forecast-cards'

function forecast (data) {

  //title
  const title = document.createElement('p')
  title.id = 'forecast-title'
  title.innerHTML = 'next 5 days'
  // const before = document.createElement('p')
  // before.innerHTML = '<-'
  // const after = document.createElement('p')
  // after.innerHTML = '->'

  const titleCard = document.createElement('div')
  titleCard.classList.add('card')
  // titleCard.appendChild(before)
  titleCard.appendChild(title)
  // titleCard.appendChild(after)

  //cards
  const cardBox = forecastCards(data)

  //container
  const forecast = document.createElement('div')
  forecast.id = 'forecast'
  forecast.appendChild(titleCard)
  forecast.appendChild(cardBox)

  return forecast
}

export default forecast