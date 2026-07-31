// ======================================
// World
// ======================================

const world = {

    rows: 20,
    cols: 20,

    data: []

};

// Generate Map
for (let row = 0; row < world.rows; row++) {

    world.data[row] = [];

    for (let col = 0; col < world.cols; col++) {

        // Pinggir = Wall
        if (
            row === 0 ||
            row === world.rows - 1 ||
            col === 0 ||
            col === world.cols - 1
        ) {

            world.data[row][col] = 1;

        } else {

            world.data[row][col] = 0;

        }

    }

}

// ======================================
// Draw Map
// ======================================

function drawMap() {

    for (let row = 0; row < world.rows; row++) {

        for (let col = 0; col < world.cols; col++) {

            if (world.data[row][col] === 1) {

                ctx.fillStyle = "#4d4d4d";

            } else {

                ctx.fillStyle = "#7ED957";

            }

            ctx.fillRect(

                col * TILE_SIZE - camera.x,
                row * TILE_SIZE - camera.y,

                TILE_SIZE,
                TILE_SIZE

            );

        }

    }

}

// ======================================
// Collision
// ======================================

function isColliding(x, y) {

    const left = Math.floor((x + player.hitbox.offsetX) / TILE_SIZE);
    const right = Math.floor((x + player.hitbox.offsetX + player.hitbox.width - 1) / TILE_SIZE);

    const top = Math.floor((y + player.hitbox.offsetY) / TILE_SIZE);
    const bottom = Math.floor((y + player.hitbox.offsetY + player.hitbox.height - 1) / TILE_SIZE);

    if (
        left < 0 ||
        right >= world.cols ||
        top < 0 ||
        bottom >= world.rows
    ) {
        return true;
    }

    return (

        world.data[top][left] === 1 ||
        world.data[top][right] === 1 ||
        world.data[bottom][left] === 1 ||
        world.data[bottom][right] === 1

    );

}