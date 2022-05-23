
export function start(state, game){
game.createWizard(state.wizard)

window.requestAnimationFrame(timestamp => gameLoop(state, game, timestamp))
}

export function gameLoop(state, game, timestamp){
    wizardMoovement(state, game)

    if(state.keys.Space){
        game.wizard.style.backgroundImage = 'url("/src/images/wizard-fire.png")'
        game.createFireball(state.wizard, state.fireball)
    }else{
        game.wizard.style.backgroundImage = 'url("/src/images/wizard.png")'
    }

//spawnBugs

    if(timestamp > state.bugSettings.nextTimestamp){
        game.createBug(state.bugSettings)
        state.bugSettings.nextTimestamp = timestamp + Math.random() * state.bugSettings.maxSpawnInterval
    }
    
//render Bugs

document.querySelectorAll('.bug').forEach(el => {
    let posX = parseInt(el.style.left)
    if(posX>0){
        el.style.left = posX - state.bugSettings.speed + 'px' 
    }else{
        el.remove()
    }
   
})

//render firebows
document.querySelectorAll('.fireball').forEach(el => {
    
    let posX = parseInt(el.style.left)
        if(posX > game.gameScreen.offsetWidth){
            el.remove()
        }else{
            el.style.left = posX + state.fireball.speed + 'px'
        }
  
})

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

