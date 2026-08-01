// ======================================
// Input
// ======================================

const Input = {

    up: false,
    down: false,
    left: false,
    right: false,

    run: false,
    interact: false

};

// ======================================
// Keyboard
// ======================================

document.addEventListener("keydown", (e) => {

    switch (e.key) {

        case "ArrowUp":
        case "w":
        case "W":
            Input.up = true;
            break;

        case "ArrowDown":
        case "s":
        case "S":
            Input.down = true;
            break;

        case "ArrowLeft":
        case "a":
        case "A":
            Input.left = true;
            break;

        case "ArrowRight":
        case "d":
        case "D":
            Input.right = true;
            break;

        case "Shift":
            Input.run = true;
            break;

        case "e":
        case "E":
            Input.interact = true;
            break;

        case "F3":
            Debug.enabled = !Debug.enabled;
            break;

    }

});

document.addEventListener("keyup", (e) => {

    switch (e.key) {

        case "ArrowUp":
        case "w":
        case "W":
            Input.up = false;
            break;

        case "ArrowDown":
        case "s":
        case "S":
            Input.down = false;
            break;

        case "ArrowLeft":
        case "a":
        case "A":
            Input.left = false;
            break;

        case "ArrowRight":
        case "d":
        case "D":
            Input.right = false;
            break;

        case "Shift":
            Input.run = false;
            break;

        case "e":
        case "E":
            Input.interact = false;
            break;

    }

});

// ======================================
// Touch Button
// ======================================

function touchButton(button, direction) {

    function start(e) {

        e.preventDefault();
        Input[direction] = true;

    }

    function stop(e) {

        e.preventDefault();
        Input[direction] = false;

    }

    // PC
    button.addEventListener("mousedown", start);
    button.addEventListener("mouseup", stop);
    button.addEventListener("mouseleave", stop);

    // HP
    button.addEventListener("touchstart", start, { passive: false });
    button.addEventListener("touchend", stop);
    button.addEventListener("touchcancel", stop);

}

// ======================================
// Register Button
// ======================================

touchButton(document.getElementById("up"), "up");
touchButton(document.getElementById("down"), "down");
touchButton(document.getElementById("left"), "left");
touchButton(document.getElementById("right"), "right");