const menuOption = document.getElementById('menuCollapse')

const playSection = document.getElementById('playSection')
const shopSection = document.getElementById('shopSection')
const betaSection = document.getElementById('betaSection')


const playNav = document.getElementById('playNav')
const shopNav = document.getElementById('shopNav')
const scoreNav = document.getElementById('scoreNav')
const betaNav = document.getElementById('betaNav')

function showMenu() {
    let menuState = menuOption.style.display
    if (menuState === 'block') {
        menuOption.style.display = 'none'
    } else {
        menuOption.style.display = 'block'
    }
}

function showPlay() {
    playSection.style.display = 'block'
    shopSection.style.display = 'none'
    betaSection.style.display = 'none'
    playNav.classList.add('active')
    shopNav.classList.remove('active')
    scoreNav.classList.remove('active')
    betaNav.classList.remove('active')
}

function showShop() {
    shopSection.style.display = 'block'
    playSection.style.display = 'none'
    betaSection.style.display = 'none'
    playNav.classList.remove('active')
    shopNav.classList.add('active')
    scoreNav.classList.remove('active')
    betaNav.classList.remove('active')
}

function showBeta() {
    betaSection.style.display = 'block'
    playSection.style.display = 'none'
    shopSection.style.display = 'none'
    playNav.classList.remove('active')
    shopNav.classList.remove('active')
    scoreNav.classList.remove('active')
    betaNav.classList.add('active')
}