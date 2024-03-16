const colors = ['linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)', 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)', 'linear-gradient(90deg, rgba(91,86,180,1) 0%, rgba(53,121,9,1) 22%, rgba(255,226,0,1) 100%)', 'linear-gradient(to top, #ec008c, #fc6767)', 'linear-gradient(to top, #ffe259, #ffa751)']
const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let counter = 0
let time = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.dataset.time)
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        counter++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame () {
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    setTime(time)
}

function decreaseTime () {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime (value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame () {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary"> ${counter}</span></h1>`
}

function createRandomCircle () {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    const size = getRandomNumber(6, 48)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    let color = getRandomColor()

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    circle.style.background = color

    board.append(circle)
}

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}