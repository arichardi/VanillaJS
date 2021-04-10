const items = document.querySelectorAll('li');
const ul = document.querySelector('ul')
const modal = document.querySelector('.popupWrapper')
const close = document.querySelector('.popup > p')
const addItemButton = document.querySelector('.addItemButton')
const removeButton = document.querySelector('.clean')
let newValue = ''

const addButton = document.querySelector('.add')

addButton.addEventListener('click', () => {
    modal.style.display = 'block'
})

ul.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        e.target.style.textDecoration = 'line-through'
    }
})

close.addEventListener('click', () => {
    modal.style.display = 'none'
})

addItemButton.addEventListener('click', () => {
    newValue = document.querySelector('.inputItem').value

    if(newValue == ''){
        modal.style.display = 'none'
        return 1
    }

    const newItem = document.createElement('li')
    newItem.textContent = newValue
    ul.append(newItem)
    newValue = 0
    modal.style.display = 'none'

})

removeButton.addEventListener('click', () => {
    const liList = Array.from(ul.children)
    liList.forEach( (element) => {
        if( element.style.textDecoration == 'line-through'){
            element.remove()
        }
    })
})