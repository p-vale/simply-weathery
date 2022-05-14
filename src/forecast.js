import './forecast.css'
import forecastCards from './forecast-cards'

function forecast () {
  const forecast = document.createElement('div')
  forecast.id = 'forecast'

  const title = document.createElement('p')
  title.id = 'forecast-title'
  title.innerHTML = 'next 16 days'
  const titleCard = document.createElement('div')
  titleCard.classList.add('card','cards-title')
  titleCard.appendChild(title)

  const cardBox = forecastCards()

  forecast.appendChild(titleCard)
  forecast.appendChild(cardBox)

  return forecast
}

export default forecast