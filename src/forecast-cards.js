function forecastCards () {
  const ext = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']

  const cardBox = document.createElement('div')
  cardBox.id = 'card-box'

  ext.map((item) => {
    let card = document.createElement('div')
    card.classList.add('card')
    let date = document.createElement('h3')
    date.innerHTML = item
    let img = document.createElement('img')
    img.src = 'http://placekitten.com/150/150'
    let weather = document.createElement('p')
    weather.innerHTML = 'WeatheR'
    let temp = document.createElement('div')
    temp.classList.add('card-temp')
    let min =  document.createElement('p')
    min.classList.add('temp-min')
    min.innerHTML = '00'
    let max =  document.createElement('p')
    max.classList.add('temp-max')
    max.innerHTML = '55'
    temp.appendChild(min)
    temp.appendChild(max)

    card.appendChild(date)
    card.appendChild(img)
    card.appendChild(weather)
    card.appendChild(temp)
    
    cardBox.append(card)
  })
  return cardBox
}

export default forecastCards
