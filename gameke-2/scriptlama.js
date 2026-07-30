const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// ======================================
// Constants
// ======================================

const TILE_SIZE = 64;
const PLAYER_SPEED = 2;

const Direction = {
    DOWN: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3
};

const State = {
    IDLE: "idle",
    WALK: "walk"
};

// Down, Left, Right, Up
const idleFrames = [5, 5, 5, 4];
const walkFrames = [6, 6, 6, 6];

// ======================================
// Map
// ======================================

const map = [

    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]

];

// ======================================
// Sprite
// ======================================

const idle = new Image();
idle.src = "assets/player/idle.png";

const walk = new Image();
walk.src = "assets/player/walk.png";

// ======================================
// Player
// ======================================

const player = {

    x: 300,
    y: 200,

    width: TILE_SIZE,
    height: TILE_SIZE,

    speed: PLAYER_SPEED,

    state: State.IDLE,
    direction: Direction.DOWN,

    frame: 0,
    frameCount: idleFrames[Direction.DOWN],

    frameTimer: 0,
    frameDelay: 10

};

// ======================================
// Input
// ======================================

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// ======================================
// Update
// ======================================

function update() {

    let moving = false;

    if (keys["ArrowDown"]) {

        player.y += player.speed;
        player.direction = Direction.DOWN;
        moving = true;

    }

    if (keys["ArrowLeft"]) {

        player.x -= player.speed;
        player.direction = Direction.LEFT;
        moving = true;

    }

    if (keys["ArrowRight"]) {

        player.x += player.speed;
        player.direction = Direction.RIGHT;
        moving = true;

    }

    if (keys["ArrowUp"]) {

        player.y -= player.speed;
        player.direction = Direction.UP;
        moving = true;

    }

    // ==================================
    // State
    // ==================================

    const newState = moving ? State.WALK : State.IDLE;

    if (player.state !== newState) {

        player.state = newState;
        player.frame = 0;
        player.frameTimer = 0;

    }

    // ==================================
    // Frame Count
    // ==================================

    player.frameCount =
        player.state === State.IDLE
            ? idleFrames[player.direction]
            : walkFrames[player.direction];

    // ==================================
    // Animation
    // ==================================

    player.frameTimer++;

    if (player.frameTimer >= player.frameDelay) {

        player.frameTimer = 0;

        player.frame++;

        if (player.frame >= player.frameCount) {

            player.frame = 0;

        }

    }

    // ==================================
    // Canvas Boundary
    // ==================================

    player.x = Math.max(
        0,
        Math.min(player.x, canvas.width - player.width)
    );

    player.y = Math.max(
        0,
        Math.min(player.y, canvas.height - player.height)
    );

}
// ======================================
// Draw Map
// ======================================

function drawMap() {

    for (let row = 0; row < map.length; row++) {

        for (let col = 0; col < map[row].length; col++) {

            if (map[row][col] === 1) {

                ctx.fillStyle = "#444";

            } else {

                ctx.fillStyle = "#7bc96f";

            }

            ctx.fillRect(

                col * TILE_SIZE,
                row * TILE_SIZE,

                TILE_SIZE,
                TILE_SIZE

            );

        }

    }

}

// ======================================
// Draw
// ======================================

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMap();

    const sprite =
        player.state === State.IDLE
            ? idle
            : walk;

    ctx.drawImage(

        sprite,

        player.frame * TILE_SIZE,
        player.direction * TILE_SIZE,

        TILE_SIZE,
        TILE_SIZE,

        player.x,
        player.y,

        player.width,
        player.height

    );

}

// ======================================
// Game Loop
// ======================================

function gameLoop() {

    update();
    draw();

    requestAnimationFrame(gameLoop);

}

// ======================================
// Asset Loader
// ======================================

let loaded = 0;

function assetLoaded() {

    loaded++;

    if (loaded === 2) {

        gameLoop();

    }

}

idle.onload = assetLoaded;
walk.onload = assetLoaded;