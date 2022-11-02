const box = document.querySelector('.fetch-box')
fetch('https://randomuser.me/api/')
    .then(response => {
        if (!response.ok) throw new Error('Oops!')
        return response.json()
    })
    .then(data => {
        data = Object.entries(data)
        let email = data[0][1][0]
        email = Object.entries(email)
        const img = document.createElement('img')
        img.setAttribute('class', 'img')
        img.setAttribute('src', `${email[10][1].large}`)
        box.appendChild(img)
        const name = document.createElement('div')
        name.setAttribute('class', 'name')
        name.textContent = email[4][1].username
        box.appendChild(name)
        const newEmail = document.createElement('div')
        newEmail.setAttribute('class', 'email')
        newEmail.textContent = email[3].join(': ')
        box.appendChild(newEmail)
        const Gender = document.createElement('div')
        Gender.setAttribute('class', 'gender')
        Gender.textContent = email[0].join(': ')
        box.appendChild(Gender)
        const phone = document.createElement('div')
        phone.setAttribute('class', 'phone')
        phone.textContent = email[7].join(': ')
        box.appendChild(phone)
        console.log(data);
    })

const changeUsers = () => {
    location.reload()
}