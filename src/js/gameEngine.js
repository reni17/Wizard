export function start(state, game){
game.createWizard(state.wizard)

window.requestAnimationFrame(timestamp => gameLoop(state, game, timestamp))
}

export function gameLoop(state, game, timestamp){
    wizardMoovement(state, game)

    if(timestamp > state.bugSettings.nextTimestamp){
        game.createBug(state.bugSettings)
        state.bugSettings.nextTimestamp = timestamp + Math.random() * state.bugSettings.maxSpawnInterval
    }
    

    window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

function wizardMoovement(state, game){
    if(state.keys.KeyD && state.wizard.posX + state.wizard.width < game.gameScreen.offsetWidth){
        state.wizard.posX += state.wizard.speed
        game.wizard.style.left = state.wizard.posX + 'px' 
    }else if(state.keys.KeyS && state.wizard.posY + state.wizard.height < game.gameScreen.offsetHeight){
        state.wizard.posY += state.wizard.speed
        game.wizard.style.top = state.wizard.posY + 'px'
    }else if(state.keys.KeyW && state.wizard.posY > 50){
        state.wizard.posY -= state.wizard.speed
        game.wizard.style.top = state.wizard.posY + 'px'
    }else if(state.keys.KeyA && state.wizard.posX > 0){
        state.wizard.posX -= state.wizard.speed
        game.wizard.style.left = state.wizard.posX + 'px' 
    }
}

