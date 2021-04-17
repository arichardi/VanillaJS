const cityForm = document.querySelector('form')

const updateCity = async () => {
    
}

cityForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    const city = cityForm.city.value.trim()
    cityForm.reset()

    //update the ui 
})