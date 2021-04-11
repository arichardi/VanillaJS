const addForm = document.querySelector('.add')
const ul = document.querySelector('.todos')
const find = document.querySelector('.search')

function generate(frase){
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${frase}</span>
                    <i class="far fa-trash-alt delete"></i>
                  </li>`

    ul.innerHTML += html
}

//insert a new item
addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const item = addForm.add.value.trim()

    if(item.length){
        generate(item)
        addForm.reset()
    }
    
})

//remove a item clicking in the trash
ul.addEventListener('click', e => {
    if(e.target.tagName == 'I'){
        e.target.parentElement.remove()

    }
})

//filter the to do list

function filtering(element){
    Array.from(ul.children)
    .filter( (item) => !item.textContent.includes(element))
    .forEach( (item) => item.classList.add('filtered') )

    Array.from(ul.children)
    .filter( (item) => item.textContent.includes(element))
    .forEach( (item) => item.classList.remove('filtered') )
}

find.addEventListener('keyup', e => {
    const search = e.target.value.trim()
    filtering(search)

})