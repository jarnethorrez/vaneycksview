const Clock = require('./js/classes/clock');

const init = () => {
    console.log(`init called from script.js`);

    let c = new Clock(30, timeUp);
    c.draw();
    c.startTimer();
}

const timeUp = () => {
  console.log("Time's up");
}

init();
