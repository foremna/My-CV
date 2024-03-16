const board = document.querySelector('#board')
const SQUARES_NUMBER = 567
const colors = ['#f79256', '#fbd1a2', '#7dcfb6', '#00b2ca', '#e7e247', '#5c80bc', '#40f99b', '#ff70d7']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
}

function setColor (el) {
    const color = getRandomColor()
    el.style.background = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (el) {
    el.style.background = '#0c2a22'
    el.style.boxShadow = '0 0 2px #0b2620'
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}