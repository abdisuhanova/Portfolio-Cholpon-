const nav = document.getElementById('nav-mb')
const burger = document.getElementById('burger')
const close_img = document.createElement('img')
burger.addEventListener('click', () => {  
    nav.style = 'display: block'
    close_img.setAttribute('src', './images/images/close.png')
    close_img.setAttribute('class', 'close-img')
    nav.appendChild(close_img)
})
close_img.addEventListener('click', () => {  
    nav.style = 'display: none'
})

