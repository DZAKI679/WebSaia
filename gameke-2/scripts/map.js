// ======================================
// World
// ======================================

const world = {

    rows: 7,
    cols: 12,

    data: [

        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]

    ]

};

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

                col * TILE_SIZE,
                row * TILE_SIZE,

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