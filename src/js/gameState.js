export function initState(){

let startX = 100
let startY = 150

    const state = {
        player: "Reni",
        gameOver: false,
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 7
        },
        keys: { 
            Space: false,
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false

        },
        bugSettings: {
            width: 40,
            height: 40,
            nextTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 7
        },
        fireball: {
            width: 20,
            height: 20,
            speed: 12,
            nextTimestamp: 0,
            maxSpawnInterval: 600
        }
    }

    return state
}

