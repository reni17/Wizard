export function initState(){
    
let startX = 100
let startY = 150

    const state = {
        player: "Reni",
        wizard: {
            with: 82,
            height: 100,
            posX: startX,
            posY: startY
        },
        keys: []
    }

    return state
}

