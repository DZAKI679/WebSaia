// ======================================
// Draw Player
// ======================================

function drawPlayer() {

    if (assetsLoaded < totalAssets) return;

    const current = SpriteSheet[player.state];

    ctx.drawImage(

        current.image,

        player.frame * current.frameWidth,
        player.direction * current.frameHeight,

        current.frameWidth,
        current.frameHeight,

        player.x - camera.x,
        player.y - camera.y,

        player.width,
        player.height

    );

}
// ======================================
// Debug
// ======================================

function drawDebug() {

    if (!Debug.enabled) return;

    if (Debug.hitbox) {

        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;

        ctx.strokeRect(
            player.x + player.hitbox.offsetX - camera.x,
            player.y + player.hitbox.offsetY - camera.y,
            player.hitbox.width,
            player.hitbox.height
        );

    }

}
// ======================================
// Draw
// ======================================

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMap();             // Ground + Replace Object

    drawOverlayObjects();  // Door, Chair, NPC

    drawPlayer();

    drawDebug();

}