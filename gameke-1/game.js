const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


let player = {
    x: 200,
    y: 200,
    size: 50,
    speed: 5
};


let keys = {};


document.addEventListener("keydown", e => {
    keys[e.key] = true;
});


document.addEventListener("keyup", e => {
    keys[e.key] = false;
});


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