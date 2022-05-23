export function initState(){

let startX = 100
let startY = 150

    const state = {
        player: "Reni",
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 7
        },
        keys: []
    }

    return state
}

