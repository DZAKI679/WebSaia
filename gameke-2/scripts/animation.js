// ======================================
// Player Animation
// ======================================

function updatePlayer() {

    let moving = false;

    // -------------------------
    // Movement
    // -------------------------

    let nextX = player.x;
    let nextY = player.y;

    if (Input.down) {

        nextY += player.speed;
        player.direction = 0;
        moving = true;

    }

    if (Input.left) {

        nextX -= player.speed;
        player.direction = 1;
        moving = true;

    }

    if (Input.right) {

        nextX += player.speed;
        player.direction = 2;
        moving = true;

    }

    if (Input.up) {

        nextY -= player.speed;
        player.direction = 3;
        moving = true;

    }

// Cek collision
if (!isColliding(nextX, nextY)) {

    player.x = nextX;
    player.y = nextY;

}
    // -------------------------
    // Animation State
    // -------------------------

    if (moving) {

        if (player.state !== "walk") {

            player.state = "walk";
            player.frame = 0;

        }

        

    } else {

        if (player.state !== "idle") {

            player.state = "idle";
            player.frame = 0;

        }

       

    }

    // -------------------------
    // Animation
    // -------------------------

    const current = SpriteSheet[player.state];

    player.frameTimer++;

    if (player.frameTimer >= current.frameDelay) {

        player.frameTimer = 0;

        player.frame++;

        const maxFrame = current.framesPerRow[player.direction];

        if (player.frame >= maxFrame) {

            player.frame = 0;

        }

    }

}