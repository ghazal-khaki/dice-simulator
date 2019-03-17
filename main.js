document.getElementById('counter').value = 1
function eraseAll() {
  document.getElementById('container').innerHTML = ''
}
function random() {
  eraseAll()
  for (let j = 0; j < parseInt(document.getElementById('counter').value); j++) {
    let randomDice = Math.ceil(Math.random() * 6)
    let dice = document.createElement('div')
    for (let i = 1; i <= 7; i++) {
      const element = document.createElement('div')
      element.classList.add(`led${i}`)
      dice.appendChild(element)
    }
    dice.setAttribute('id', `dice-${randomDice}`)
    dice.setAttribute('title', randomDice)
    document.getElementById('container').appendChild(dice)
  }
}
