function updatePlayer() {

    let moving = false;

    if (keys["ArrowDown"]) {

        player.y += player.speed;
        player.direction = Direction.DOWN;
        moving = true;

    }

    if (keys["ArrowLeft"]) {

        player.x -= player.speed;
        player.direction = Direction.LEFT;
        moving = true;

    }

    if (keys["ArrowRight"]) {

        player.x += player.speed;
        player.direction = Direction.RIGHT;
        moving = true;

    }

    if (keys["ArrowUp"]) {

        player.y -= player.speed;
        player.direction = Direction.UP;
        moving = true;

    }

    player.x = Math.max(
        0,
        Math.min(player.x, canvas.width - player.width)
    );

    player.y = Math.max(
        0,
        Math.min(player.y, canvas.height - player.height)
    );

    updateAnimation(moving);

}

function update() {

    updatePlayer();
    

}

function gameLoop() {

    update();
    draw();

    requestAnimationFrame(gameLoop);

}