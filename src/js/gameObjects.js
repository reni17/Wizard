export function initGameObjects(){
    const startScreen = document.querySelector('.start-game');
    const gameScreen = document.querySelector('.game-screen');
    const gameScore = document.querySelector('.game-score');
    

    return {
        startScreen,
        gameScreen,
        gameScore,
        createWizard(initState){
            let wizard = document.createElement('div')
            wizard.classList.add('wizard')

            wizard.style.width = initState.width + "px"
            wizard.style.height = initState.height + "px"

            wizard.style.left = initState.posX + "px"
            wizard.style.top = initState.posY + "px"

            this.wizard = wizard
            gameScreen.appendChild(wizard)

            return wizard
        }
    }
}
   




   




