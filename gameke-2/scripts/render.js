function drawPlayer() {

    const sprite =
        player.state === State.IDLE
            ? idle
            : walk;

    ctx.drawImage(

        sprite,

        player.frame * TILE_SIZE,
        player.direction * TILE_SIZE,

        TILE_SIZE,
        TILE_SIZE,

        player.x,
        player.y,

        player.width,
        player.height

    );

}

function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawMap();

    drawPlayer();

}