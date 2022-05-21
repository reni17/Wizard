const startScreen = document.querySelector('.start-game');
const gameScreen = document.querySelector('.game-screen')

startScreen.addEventListener('click', (e)=> {
    e.currentTarget.classList.add('hidden')
    gameScreen.classList.remove('hidden')
})