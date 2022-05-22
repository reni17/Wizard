import { initGameObjects } from "./gameObjects.js"
import {gameLoop, start} from "./gameEngine.js"
import {initState} from './gameState.js'

let game = initGameObjects()
let state = initState()

game.startScreen.addEventListener('click', (e)=> {
    e.currentTarget.classList.add('hidden')
    game.gameScreen.classList.remove('hidden')
    game.gameScore.classList.remove('hidden')

    start(state, game)
})

//Start game

