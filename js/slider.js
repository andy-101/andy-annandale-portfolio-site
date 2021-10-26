const img = document.getElementById('carousel')
const rightBtn = document.getElementById('right-btn')
const leftBtn = document.getElementById('left-btn')
const imgLink = document.getElementById('carousel-link')

const links = [
    'https://hivex-cloud.vercel.app/',
    'https://www.advanceroadsideassistance.co.za/',
    ''
]

let pictures = ['']

if (screen.width > 800) {
    pictures = [
        './images/screenshots/hivexcloud-screenshot-1.jpg',
        './images/screenshots/advanceroadside-screenshot-1.jpg',
        './images/screenshots/hivexgaming-screenshot-1.jpg'
    ]
} else {
    pictures = [
        '',
        '',
        '',
    ]
}

imgLink.href = links[0]
img.src = pictures[0]
let position = 0

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position]
        imgLink.href = links[position]
        return;
    }
    img.src = pictures[position + 1]
    imgLink.href = links[position + 1]
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1
        img.src = pictures[position]
        imgLink.href = links[position]
        return;
    }
    img.src = pictures[position - 1]
    imgLink.href = links[position - 1]
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);