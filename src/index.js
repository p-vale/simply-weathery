import './style.css'
import component from './component'
import mobileAlert from './mobileAlert'
import searchIcon from './img/search.webp'

const input = document.createElement('input')
input.id = 'search-input'
input.type = 'text'
input.required = true
input.placeholder = 'Amsterdam'

const searchImg = document.createElement('img')
searchImg.id = 'search-image'
searchImg.src = searchIcon

const searchBox = document.createElement('div')
searchBox.id = 'search-box'
searchBox.appendChild(input)
searchBox.appendChild(searchImg)

searchImg.addEventListener('click', () => {
  if (input.validity.valueMissing) {
    const alert = document.createElement('p')
    alert.id = 'alert'
    alert.innerHTML = 'please choose a city'
    document.body.appendChild(alert)
  } else {
    document.body.innerHTML = ''
    document.body.appendChild(component(input.value))
    input.value = ''
    document.body.appendChild(searchBox)
  }
})

if (window.innerWidth <= 750) {
  document.body.appendChild(mobileAlert())
} else {
  document.body.appendChild(component('berlin'))
  document.body.appendChild(searchBox)
}

