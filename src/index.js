import './style.css'
import main from './main.js'
import forecast from './forecast.js'

function component () {
  const container = document.createElement('div')
  container.id = 'container'
  container.appendChild(main())
  container.appendChild(forecast())

  return container
}

 document.body.appendChild(component())