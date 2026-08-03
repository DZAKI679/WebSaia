// ======================================
// Assets
// ======================================

const Assets = {

    idle: new Image(),
    walk: new Image(),
    tileset: new Image()

};

let assetsLoaded = 0;
const totalAssets = 3;

// ======================================
// Load Assets
// ======================================

function loadAssets() {

    Assets.idle.src = "assets/player/idle.png";
    Assets.walk.src = "assets/player/walk.png";
    Assets.tileset.src = "assets/tiles/tileset.png";

    Assets.idle.onload = assetLoaded;
    Assets.walk.onload = assetLoaded;
    Assets.tileset.onload = assetLoaded;

}

// ======================================
// Asset Loaded
// ======================================

function assetLoaded() {

    assetsLoaded++;

}