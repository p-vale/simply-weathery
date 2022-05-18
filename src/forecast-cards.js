function forecastCards (data) {
  const dataList = data

  const cardBox = document.createElement('div')
  cardBox.id = 'card-box'
  cardBox.classList.add('rotate')

  dataList.map((item) => {
    let card = document.createElement('div')
    card.classList.add('card', 'rotate')
    let date = document.createElement('h3')
    date.classList.add('card-date')
    date.innerHTML = item.dt

    let img = document.createElement('img')
    img.src = 'http://placekitten.com/150/150'
    let weather = document.createElement('p')
    weather.innerHTML = item.fore

    let temp = document.createElement('div')
    temp.classList.add('card-temp')
    let min =  document.createElement('p')
    min.classList.add('temp-min')
    min.innerHTML = item.min
    let max =  document.createElement('p')
    max.classList.add('temp-max')
    max.innerHTML = item.max
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
