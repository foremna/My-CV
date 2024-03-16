const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlider = document.querySelector('.main-slide')
const slidersCount = mainSlider.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidersCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlider('up')
})

downBtn.addEventListener('click', () => {
    changeSlider('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlider('up')
    } else if (event.key === 'ArrowDown') {
        changeSlider('down')
    }
})

function changeSlider (direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidersCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidersCount - 1
        }
    }

    const height = container.clientHeight

    mainSlider.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}