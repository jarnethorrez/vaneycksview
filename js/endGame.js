const BrushTimer = require('../js/classes/BrushTimer');

const init = () => {
    let timer = new BrushTimer(10, timeUp);
    timer.draw();
}

const timeUp = () => {
    window.location.href = "index.html";
}

init();
