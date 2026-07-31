// ======================================
// Update
// ======================================

function update() {

    updatePlayer();
    updateCamera();

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
// Init
// ======================================

function init() {

    loadAssets();

    waitAssets();

}

function waitAssets() {

    if (assetsLoaded >= totalAssets) {

        gameLoop();
        return;

    }

    requestAnimationFrame(waitAssets);

}

// ======================================
// Start
// ======================================

init();