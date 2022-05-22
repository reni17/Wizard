import { startScreen, gameScore, gameScreen } from "./gameObjects.js"


startScreen.addEventListener('click', (e)=> {
    e.currentTarget.classList.add('hidden')
    gameScreen.classList.remove('hidden')
    gameScore.classList.remove('hidden')
})

