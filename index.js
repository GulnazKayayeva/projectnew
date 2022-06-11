let arr = [
    {
        src: './img/Vector.svg',
        inner: 'Dashboard'
    },
    {
        src: './img/Vector (2).svg',
        inner: 'Customers'
    },
    {
        src: './img/Vector (9).svg',
        inner: 'Products'
    },
    {
        src: './img/222.png',
        inner: 'Account'
    },
    {
        src: './img/Vector (8).svg',
        inner: 'Settings'
    },
    {
        src: './img/Vector (7).svg',
        inner: 'Login'
    },
    {
        src: './img/Vector (6).svg',
        inner: 'Register'
    },
    {
        src: './img/Vector (5).svg',
        inner: 'Error'
    }
]

let second = document.querySelector('.gulnaz-second-item')

function newEl(arr) {
    for (let item of arr) {
        let newItem = `<div class="gulnaz-item">
        <img  class="gulnaz-img-item" src="${item.src}" alt="">
        <p class="gulnaz-noun-item">${item.inner}</p>
        </div>`
        second.innerHTML += newItem
    }
}

newEl(arr)

let items = document.querySelectorAll('.gulnaz-item')

items.forEach(el => {

    el.onclick = () => {
        items.forEach(el => el.style.background = '')
        el.style.background = 'rgba(54, 54, 78, 0.664)'
    }
})
