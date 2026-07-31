// ======================================
// Player
// ======================================

const player = {

    // Position
    x: (canvas.width - TILE_SIZE) / 2,
    y: (canvas.height - TILE_SIZE) / 2,

    // Size
    width: TILE_SIZE,
    height: TILE_SIZE,

    // Movement
    speed: 2,

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

        offsetX: 20,
        offsetY: 20,

        width: 22,
        height: 25

    }

};