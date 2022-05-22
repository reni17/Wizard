export function start(state, game){
game.createWizard(state.wizard)

window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

export function gameLoop(state, game){
    if(state.keys.KeyD){
        state.wizard.posX += 5
        game.wizard.style.left = state.wizard.posX + 'px' 
    }else if(state.keys.KeyS){
        state.wizard.posY += 5
        game.wizard.style.top = state.wizard.posY + 'px'
    }else if(state.keys.KeyW){
        state.wizard.posY -= 5
        game.wizard.style.top = state.wizard.posY + 'px'
    }else if(state.keys.KeyA){
        state.wizard.posX -= 5
        game.wizard.style.left = state.wizard.posX + 'px' 
    }

    
    window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

