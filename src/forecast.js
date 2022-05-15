import './forecast.css'
import forecastCards from './forecast-cards'

function forecast () {
  const forecast = document.createElement('div')
  forecast.id = 'forecast'

  const title = document.createElement('p')
  title.id = 'forecast-title'
  title.innerHTML = 'next 16 days'
  const before = document.createElement('p')
  before.innerHTML = '<-'
  const after = document.createElement('p')
  after.innerHTML = '->'
  const titleCard = document.createElement('div')
  titleCard.classList.add('cards-title')
  titleCard.appendChild(before)
  titleCard.appendChild(title)
  titleCard.appendChild(after)

  const cardBox = forecastCards()

  forecast.appendChild(titleCard)
  forecast.appendChild(cardBox)

  return forecast
}

export default forecast