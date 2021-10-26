const navOpenIcon = document.querySelector('.nav-open-btn')
const navCloseIcon = document.querySelector('.nav-close-btn')
const navBtn = document.querySelector('.nav-btn')
const nav = document.querySelector('.nav')

const OpenCloseMenu = () => {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden')
        nav.classList.add('grid')
        navCloseIcon.classList.remove('hidden')
        navOpenIcon.classList.add('hidden')
    } else {
        nav.classList.remove('grid')
        nav.classList.add('hidden')
        navOpenIcon.classList.remove('hidden')
        navCloseIcon.classList.add('hidden')
    }
}

navBtn.addEventListener('click', () => {
    OpenCloseMenu();
})