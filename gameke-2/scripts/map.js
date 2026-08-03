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

        // Wall Atas (kecuali pojok kiri & kanan)
        if (
            row === 0 &&
            col > 0 &&
            col < world.cols - 1
        ) {

            world.data[row][col] = Tiles.WALL_TOP;

        }

        // Wall Kiri, Kanan, dan Bawah
        else if (
            row === world.rows - 1 ||
            col === 0 ||
            col === world.cols - 1
        ) {

            world.data[row][col] = Tiles.WALL_SIDE;

        }

        // Floor
        else {

            world.data[row][col] = Tiles.FLOOR_WOOD_1;

        }

    }

}

// ======================================
// Draw Tile
// ======================================

function drawTile(tileID, col, row) {

    // Jangan gambar WALL_SIDE
    if (tileID === Tiles.WALL_SIDE) return;

    const tile = TileMap[tileID];

    if (!tile) return;

    ctx.drawImage(

        Assets.tileset,

        tile.x * TILESET_SIZE,
        tile.y * TILESET_SIZE,

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

        world.data[top][left] === Tiles.WALL_TOP ||
        world.data[top][left] === Tiles.WALL_SIDE ||

        world.data[top][right] === Tiles.WALL_TOP ||
        world.data[top][right] === Tiles.WALL_SIDE ||

        world.data[bottom][left] === Tiles.WALL_TOP ||
        world.data[bottom][left] === Tiles.WALL_SIDE ||

        world.data[bottom][right] === Tiles.WALL_TOP ||
        world.data[bottom][right] === Tiles.WALL_SIDE

    );

}