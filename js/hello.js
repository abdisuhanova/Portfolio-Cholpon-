form = document.querySelector('.form')
const input = document.querySelector('.hello-input')
const name = document.querySelector('.hello-text')
form.addEventListener('submit', (event) => {
    event.preventDefault()   
    name.textContent = `Hello, ${input.value} !`
})
