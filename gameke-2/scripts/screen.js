// ======================================
// Screen
// ======================================

const Screen = {

    baseWidth: 768,
    baseHeight: 448,

    width: window.innerWidth,
    height: window.innerHeight,

    scale: 1,

    isPortrait: false,
    isLandscape: false,
    isMobile: false

};

// ======================================
// Resize
// ======================================

function resizeGame() {

    Screen.width = window.innerWidth;
    Screen.height = window.innerHeight;

    const scaleX = Screen.width / Screen.baseWidth;
    const scaleY = Screen.height / Screen.baseHeight;

    Screen.scale = Math.min(scaleX, scaleY);

    canvas.style.width = `${Screen.baseWidth * Screen.scale}px`;
    canvas.style.height = `${Screen.baseHeight * Screen.scale}px`;

    Screen.isPortrait = Screen.height > Screen.width;
    Screen.isLandscape = Screen.width >= Screen.height;

    Screen.isMobile = navigator.maxTouchPoints > 0;

}

window.addEventListener("resize", resizeGame);
window.addEventListener("load", resizeGame);