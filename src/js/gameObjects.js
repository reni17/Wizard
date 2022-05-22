export function initGameObjects(){
    const startScreen = document.querySelector('.start-game');
    const gameScreen = document.querySelector('.game-screen');
    const gameScore = document.querySelector('.game-score');
    const wizard = document.querySelector('.wizard')

    return {
        startScreen,
        gameScreen,
        gameScore,
        createWizard(initState){
            let wizard = document.createElement('div')
            wizard.classList.add('wizard')

            wizard.style.width = initState.width + "px"
            wizard.style.height = initState.height + "px"

            wizard.style.left = initState.startX + "px"
            wizard.style.top = initState.startY + "px"

            this.wizard = wizard
            gameScreen.appendChild(wizard)

            return wizard
        }
    }
}
   




   




