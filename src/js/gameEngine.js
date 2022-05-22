
export function start(state, game){
window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

export function gameLoop(state, game){
    console.log(state.player);
    window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

