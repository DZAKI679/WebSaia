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

            world.data[row][col] = Tiles.WALL;

        } else {

            world.data[row][col] = Tiles.FLOOR_WOOD_1;

        }

    }

}

// ======================================
// Draw Tile
// ======================================

function drawTile(tileID, col, row) {

    let sx = 0;
    let sy = 0;

    switch (tileID) {

        case Tiles.FLOOR_WOOD_1:
            sx = 64;
            sy = 0;
            break;

        case Tiles.WALL:

            ctx.fillStyle = "#4d4d4d";

            ctx.fillRect(

                col * TILE_SIZE - camera.x,
                row * TILE_SIZE - camera.y,

                TILE_SIZE,
                TILE_SIZE

            );

            return;

    }

    ctx.drawImage(

        Assets.tileset,

        sx,
        sy,

        TILESET_SIZE,
        TILESET_SIZE,

        col * TILE_SIZE - camera.x,
        row * TILE_SIZE - camera.y,

        TILE_SIZE,
        TILE_SIZE

    );

}

// ======================================
// Draw Map
// ======================================

function drawMap() {

    for (let row = 0; row < world.rows; row++) {

        for (let col = 0; col < world.cols; col++) {

            drawTile(

                world.data[row][col],

                col,
                row

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

        world.data[top][left] === Tiles.WALL ||
        world.data[top][right] === Tiles.WALL ||
        world.data[bottom][left] === Tiles.WALL ||
        world.data[bottom][right] === Tiles.WALL

    );

}