const correctAnswers = ['C', 'B', 'C','C', 'B' ]
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const percent = document.querySelector('span')

form.addEventListener('submit', (event, index) => {
    event.preventDefault()
    
    let score = 0
    const playerAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]

    playerAnswers.forEach( (item, index) => {
        if(item === correctAnswers[index]){
            score += 20
        }
    })

    result.classList.remove('d-none')
    //percent.innerText = `${score}%`

    scrollTo(0,0)

    let initialScore = 0

    let timer = setInterval(() =>{
        percent.innerText = `${initialScore}%`
        if(initialScore == score){
            clearInterval(timer)
        }else{
            initialScore += 1
        }
    }, 30)

})
