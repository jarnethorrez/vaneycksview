const Clock = require(`../js/classes/Clock`);

let score = 0;
let $hints;
let $colorFeedback;
let time = 30;
let c;

const init = () => {
    c = new Clock(time, timeUp);
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
  }, 500);

  score++;

  if (score == 3) {
    localStorage.setItem(`score`, getScore());
    window.location.href = "endGood.html";
  }
}

const getScore = () => {
  const finalScore = Math.round((score * 3) + (c.secondsLeft / (time/2)), 0);
  localStorage.setItem(`score`, finalScore);

  return finalScore;
}


const timeUp = () => {
  console.log("Time's up");
  if(getScore()) {
      localStorage.setItem(`score`, getScore());
      window.location.href = "endGood.html";
  } else {
    window.location.href = "endBad.html";
  }
}

init();
