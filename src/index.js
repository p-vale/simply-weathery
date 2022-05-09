import './style.css'
import main from './main'
import future from './future'

function component () {
  const container = document.createElement('div')
  container.id = 'container'
  container.appendChild(main())
  container.appendChild(future())

  return container
}

 document.body.appendChild(component())