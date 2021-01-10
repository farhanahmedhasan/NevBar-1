const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    navLinksLi.forEach((item) => {
        item.classList.toggle('fade')
    })
})