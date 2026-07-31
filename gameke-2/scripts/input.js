// ======================================
// Input
// ======================================

const keys = {};

// ======================================
// Keyboard
// ======================================

document.addEventListener("keydown", (e) => {

    keys[e.key] = true;

});

document.addEventListener("keyup", (e) => {

    keys[e.key] = false;

});

document.addEventListener("keydown", (e) => {

    if (e.key === "F3") {

        Debug.enabled = !Debug.enabled;

    }

});

// ======================================
// Touch Button
// ======================================

function touchButton(button, key) {

    function start(e) {

        e.preventDefault();
        keys[key] = true;

    }

    function stop(e) {

        e.preventDefault();
        keys[key] = false;

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

touchButton(document.getElementById("up"), "ArrowUp");
touchButton(document.getElementById("down"), "ArrowDown");
touchButton(document.getElementById("left"), "ArrowLeft");
touchButton(document.getElementById("right"), "ArrowRight");