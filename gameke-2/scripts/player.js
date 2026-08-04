// ======================================
// Player
// ======================================

const player = {

    // Position
    x: (canvas.width - TILE_SIZE) / 2,
    y: (canvas.height - TILE_SIZE) / 2,

    // Size
    width: 96,
    height: 96,

    // Movement
    speed: 3,

    // Animation
    state: "idle",

    // Direction
    // 0 = Down
    // 1 = Left
    // 2 = Right
    // 3 = Up
    direction: 0,

    // Animation Frame
    frame: 0,
    frameCount: 0,

    frameTimer: 0,
    frameDelay: 0,
    // Hitbox

    hitbox: {

        width: 24,
        height: 10,

        offsetX: 35,
        offsetY: 60

    }

};