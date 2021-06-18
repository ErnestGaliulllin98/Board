const board = document.querySelector('#board')
const colors = ['red', 'orange', 'yellow', 'green', '#31C1E7', 'blue', 'purple']
const SQUARES_NUMBER = 300

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  board.append(square)
  
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = `#1d1d1d`
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[getRandomArbitrary(0, colors.length)]
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}