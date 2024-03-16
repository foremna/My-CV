const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', draganddrop)
}

function dragstart (event) {
    setTimeout(() => {
        event.target.classList.add('hold', 'hide'), 0
    })
}

function dragend (event) {
    event.target.classList.remove('hold', 'hide')
}

function dragover (event) {
    event.preventDefault();
}

function dragenter (event) {
    event.target.classList.add('hovered')
}

function dragleave (event) {
    event.target.classList.remove('hovered')
}

function draganddrop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}