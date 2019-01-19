const Clock = require(`../js/classes/Clock`);

const init = () => {
    console.log(`init called from game.js`);

    let c = new Clock(3, timeUp);
    c.draw();
    c.startTimer();
}

const timeUp = () => {
  console.log("Time's up");
  window.location.href = "endGood.html";
}

init();
