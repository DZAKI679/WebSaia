// ======================================
// Draw Object
// ======================================

function drawObject(object) {

    const tile = TileMap[object.tile];

    if (!tile) return;

    ctx.drawImage(

        Assets.tileset,

        tile.x * TILESET_SIZE,
        tile.y * TILESET_SIZE,

        TILESET_SIZE,
        TILESET_SIZE,

        object.col * TILE_SIZE - camera.x,
        object.row * TILE_SIZE - camera.y,

        TILE_SIZE,
        TILE_SIZE

    );

}

// ======================================
// Replace Layer
// ======================================

function drawReplaceObjects() {

    for (const object of ReplaceObjects) {

        drawObject(object);

    }

}

// ======================================
// Overlay Layer
// ======================================

function drawOverlayObjects() {

    for (const object of OverlayObjects) {

        drawObject(object);

    }

}