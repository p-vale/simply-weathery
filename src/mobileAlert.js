function mobileAlert () {
  const mobBox = document.createElement('div')
  mobBox.id = 'mobile-box'
  const mobTitle = document.createElement('h1')
  mobTitle.innerHTML = 'Ops!'
  const mobTxt = document.createElement('h2')
  mobTxt.innerHTML = 'To view this webpage you need a screen of at least 750x500px'
  mobBox.appendChild(mobTitle)
  mobBox.appendChild(mobTxt)

  return mobBox
}

export default mobileAlert