const Clock = require(`../js/classes/Clock`);

let score;

const init = () => {
    window.onload = () => {
      score = 4;
      localStorage.setItem("score", score);
    }

    let c = new Clock(3, timeUp);
    c.draw();
    c.startTimer();
}


const timeUp = () => {
  console.log("Time's up");

  // NOG AANPASSEN NAAR ENDBAD.HTML IF (SCORE == 0)
  window.location.href = "endGood.html";
}

init();
