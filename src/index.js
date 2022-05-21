import './style.css'
import component from './component'
import searchIcon from './img/icons/search.webp'

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
    input.setCustomValidity('please choose a city');
    input.reportValidity();
  } else {
    document.body.innerHTML = ''
    document.body.appendChild(component(input.value))
    input.value = ''
    document.body.appendChild(searchBox)
  }
})

document.body.appendChild(component('berlin'))
document.body.appendChild(searchBox)
