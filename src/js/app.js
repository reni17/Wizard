import { initGameObjects } from "./gameObjects.js"
import {gameLoop, start} from "./gameEngine.js"
import {initState} from './gameState.js'


const availableKeys = [
    'KeyA', 'KeyD', 'KeyS', 'KeyW'
]

document.addEventListener('keydown', (e)=> {
    if(availableKeys.includes(e.code)){
       state.keys[e.code] = true 
    }

})

document.addEventListener('keyup', (e)=> {
    if(availableKeys.includes(e.code)){
        initState.keys[e.code] = false 
     }
    })

let game = initGameObjects()
let state = initState()

game.startScreen.addEventListener('click', (e)=> {
    e.currentTarget.classList.add('hidden')
    game.gameScreen.classList.remove('hidden')
    game.gameScore.classList.remove('hidden')

    start(state, game)
})

//Start game

