const idle = new Image();
idle.src = "assets/player/idle.png";

const walk = new Image();
walk.src = "assets/player/walk.png";

let loaded = 0;

function assetLoaded() {

    loaded++;

    if (loaded === 2) {

        gameLoop();

    }

}

idle.onload = assetLoaded;
walk.onload = assetLoaded;