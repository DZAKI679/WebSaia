const player = {

    x: (canvas.width - TILE_SIZE) / 2,
    y: (canvas.height - TILE_SIZE) / 2,

    width: TILE_SIZE,
    height: TILE_SIZE,

    speed: PLAYER_SPEED,

    state: State.IDLE,
    direction: Direction.DOWN,

    frame: 0,
    frameCount: idleFrames[Direction.DOWN],

    frameTimer: 0,
    frameDelay: 12

};