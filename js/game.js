const Clock = require(`../js/classes/Clock`);

let score;
let $hints;
let $colorFeedback;
let time = 30;

const init = () => {
    window.onload = () => {
      score = 4;
      localStorage.setItem("score", score);
    }

    let c = new Clock(time, timeUp);
    c.draw();
    c.startTimer();

    $details = document.querySelectorAll(`.detail`);
    $details.forEach($detail => {
      $detail.addEventListener(`click`, handleDetailClick);
    });

    $colorFeedback = document.querySelector(`.colorFeedback`);
    $colorFeedback.addEventListener(`click`, handleColorFeedbackClick);

    $hints = document.querySelectorAll(`.hint`);
}

const handleColorFeedbackClick = e => {
  console.log($colorFeedback);
  $colorFeedback.style.animationName = "feedBackNegative";
  $colorFeedback.style.animationDuration = "500ms";
  setTimeout(() => {
    $colorFeedback.style.animationName = "";
    $colorFeedback.style.animationDuration = "";
  }, 500)
}

const handleDetailClick = e => {
  const id = e.currentTarget.id;
  $hints[id].classList.add('hint-guessed');
  e.currentTarget.parentNode.removeChild(e.currentTarget);

  $colorFeedback.style.animationName = "feedBackPositive";
  $colorFeedback.style.animationDuration = "500ms";
  setTimeout(() => {
    $colorFeedback.style.animationName = "";
    $colorFeedback.style.animationDuration = "";
  }, 500)
}


const timeUp = () => {
  console.log("Time's up");

  // NOG AANPASSEN NAAR ENDBAD.HTML IF (SCORE == 0)
  window.location.href = "endGood.html";
}

init();
