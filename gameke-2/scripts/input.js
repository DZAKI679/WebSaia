const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// ======================================
// Touch Button
// ======================================

function touchButton(button, key){

    function start(e){

        e.preventDefault();
        keys[key] = true;

    }

    function stop(e){

        e.preventDefault();
        keys[key] = false;

    }

    button.addEventListener("mousedown", start);
    button.addEventListener("mouseup", stop);
    button.addEventListener("mouseleave", stop);

    button.addEventListener("touchstart", start);
    button.addEventListener("touchend", stop);
    button.addEventListener("touchcancel", stop);

}

touchButton(document.getElementById("up"), "ArrowUp");
touchButton(document.getElementById("down"), "ArrowDown");
touchButton(document.getElementById("left"), "ArrowLeft");
touchButton(document.getElementById("right"), "ArrowRight");