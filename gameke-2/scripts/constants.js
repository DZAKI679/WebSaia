// ======================================
// Canvas
// ======================================

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

const idleFrames = [5, 5, 5, 4];
const walkFrames = [6, 6, 6, 6];