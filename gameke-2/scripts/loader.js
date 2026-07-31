// ======================================
// Assets
// ======================================

const Assets = {

    idle: new Image(),
    walk: new Image()

};

let assetsLoaded = 0;
const totalAssets = 2;

// ======================================
// Load Assets
// ======================================

function loadAssets() {

    Assets.idle.src = "assets/player/idle.png";
    Assets.walk.src = "assets/player/walk.png";

    Assets.idle.onload = assetLoaded;
    Assets.walk.onload = assetLoaded;

}

// ======================================
// Asset Loaded
// ======================================

function assetLoaded() {

    assetsLoaded++;

}
