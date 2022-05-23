export function initGameObjects(){
    const startScreen = document.querySelector('.start-game');
    const gameScreen = document.querySelector('.game-screen');
    const gameScore = document.querySelector('.game-score');
    

    return {
        startScreen,
        gameScreen,
        gameScore,
        createWizard(initState){
            const wizard = document.createElement('div')
            wizard.classList.add('wizard')

            wizard.style.width = initState.width + 'px'
            wizard.style.height = initState.height + 'px'

            wizard.style.left = initState.posX + 'px'
            wizard.style.top = initState.posY + 'px'

            this.wizard = wizard
            gameScreen.appendChild(wizard)

            return wizard
        },
        createBug(state){
            const bug = document.createElement('div')
            bug.classList.add('bug')

            bug.style.width = state.width + 'px'
            bug.style.height = state.height + 'px'

            
            bug.style.top = Math.random() * ((gameScreen.offsetHeight) - (state.height)) + 'px'
            bug.style.left = (gameScreen.offsetWidth - state.width) + 'px'

            gameScreen.appendChild(bug)
        },
        createFireball(wizard, fireball){

            
            const fireballEl = document.createElement('div')
            fireballEl.classList.add('fireball')

           
        

            fireballEl.style.top = wizard.posY + wizard.height/3 + 'px'
            fireballEl.style.left = wizard.posX + wizard.width + 'px'  

            fireballEl.style.width = fireball.width + 'px'
            fireballEl.style.height = fireball.height + 'px'

            gameScreen.appendChild(fireballEl)

        }
    }
}
   




   




