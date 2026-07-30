const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

let player = {
    x: 200,
    y: 200,
    size: 50,
    speed: 5
};

let keys = {};

// ===========================
// Keyboard
// ===========================
document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// ===========================
// Button Control
// ===========================
function controlButton(button, key) {

    function start(e) {
        e.preventDefault();
        keys[key] = true;
    }

    function stop(e) {
        e.preventDefault();
        keys[key] = false;
    }

    // PC
    button.addEventListener("mousedown", start);
    button.addEventListener("mouseup", stop);
    button.addEventListener("mouseleave", stop);

    // HP
    button.addEventListener("touchstart", start, { passive: false });
    button.addEventListener("touchend", stop, { passive: false });
    button.addEventListener("touchcancel", stop, { passive: false });
}

controlButton(up, "ArrowUp");
controlButton(down, "ArrowDown");
controlButton(left, "ArrowLeft");
controlButton(right, "ArrowRight");

// ===========================
// Update
// ===========================
function update() {

    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }

    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowUp"]) {
        player.y -= player.speed;
    }

    if (keys["ArrowDown"]) {
        player.y += player.speed;
    }

    // Batas kiri
    if (player.x < 0) {
        player.x = 0;
    }

    // Batas kanan
    if (player.x + player.size > canvas.width) {
        player.x = canvas.width - player.size;
    }

    // Batas atas
    if (player.y < 0) {
        player.y = 0;
    }

    // Batas bawah
    if (player.y + player.size > canvas.height) {
        player.y = canvas.height - player.size;
    }

    draw();

    requestAnimationFrame(update);
}

// ===========================
// Draw
// ===========================
function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";

    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );
}

update();