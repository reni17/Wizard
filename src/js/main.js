const startScreen = document.querySelector('.start-game');
const gameScreen = document.querySelector('.game-screen');
const gameScore = document.querySelector('.game-score');

startScreen.addEventListener('click', (e)=> {
    e.currentTarget.classList.add('hidden')
    gameScreen.classList.remove('hidden')
    gameScore.classList.remove('hidden')
})