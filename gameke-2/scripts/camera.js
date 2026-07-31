// ======================================
// Camera
// ======================================

const camera = {

    x: 0,
    y: 0

};

// ======================================
// Update Camera
// ======================================

function updateCamera() {

    camera.x = player.x - canvas.width / 2 + player.width / 2;
    camera.y = player.y - canvas.height / 2 + player.height / 2;

    const maxX = world.cols * TILE_SIZE - canvas.width;
    const maxY = world.rows * TILE_SIZE - canvas.height;

    camera.x = Math.max(0, Math.min(camera.x, maxX));
    camera.y = Math.max(0, Math.min(camera.y, maxY));

}