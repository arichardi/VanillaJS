const submit = document.querySelector('.validationForm')
const insertField = document.querySelector('form > input')
const valueForm = insertField.value
const regexValidation = /[a-z]{6}/

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!valueForm){
        const error = document.querySelector('.empty')
        error.style.display = 'block'
        
    }

    if(!regexValidation.test(valueForm)){
        const error = document.querySelector('.errorSize')
        error.style.display = 'block'
        
    }
    
    const success = document.querySelector('.success')
    success.style.display = 'block'
    

})

//live validation
insertField.addEventListener('keyup', (e) => {
    if(regexValidation.test(e.target.value)){
        if(insertField.classList.contains('liveError')){
            insertField.classList.remove('liveError')
        }
        insertField.classList.add('liveSuccess')
    }else {
        if(insertField.classList.contains('liveSuccess')){
            insertField.classList.remove('liveSuccess')
        }
        insertField.classList.add('liveError')
    }
})