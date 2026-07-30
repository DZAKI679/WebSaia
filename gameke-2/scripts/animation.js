function updateAnimation(moving) {

    const newState = moving ? State.WALK : State.IDLE;

    if (player.state !== newState) {

        player.state = newState;
        player.frame = 0;
        player.frameTimer = 0;

    }

    player.frameCount =
        player.state === State.IDLE
            ? idleFrames[player.direction]
            : walkFrames[player.direction];

    player.frameTimer++;

    if (player.frameTimer >= player.frameDelay) {

        player.frameTimer = 0;

        player.frame++;

        if (player.frame >= player.frameCount) {

            player.frame = 0;

        }

    }

}