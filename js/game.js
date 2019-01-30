const Clock = require(`../js/classes/Clock`);
const PopUp = require(`../js/classes/PopUp`);

let score = 0;
let $hints;
let $colorFeedback;
let time = 60;
let c;
let tapInstructionVisible = true;
let popupTexts = [];
let popupImages = [];
let amountOfDetails = 3;

const shuffle = (array) => {
    let tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

const createHints = data => {

  // Get parent element
  const $hintList = document.querySelector(`.ingame-right`);

  // make article element for each hint
  data.forEach(detail => {
    const $article = document.createElement(`article`);
    $article.classList.add(`hint`);

    const $p = document.createElement(`p`);
    $p.innerText = detail[`hint`];

    $article.appendChild($p);
    $hintList.appendChild($article);
  });

}

const createDetails = data => {

  $parent = document.querySelector(`.clickListeners`);

  for (let i=0; i < data.length; i++) {

    $detail = document.createElement(`div`);
    $detail.id = i;
    $detail.classList.add(`detail`);
    $detail.style.width = data[i]['width'];
    $detail.style.height = data[i]['height'];
    $detail.style.top = data[i]['top'];
    $detail.style.left = data[i]['left'];

    $parent.append($detail);
  }

}

const initializeGame = () => {
  fetch("../assets/data/details.json")
    .then(r => r.json())
    .then(data => {
      shuffle(data);
      const filteredTips = [];
      for(let i = 0; i < amountOfDetails; i++) {
        filteredTips.push(data[i]);
      }
      createHints(filteredTips);
      createDetails(filteredTips);
      setPopups(filteredTips);
      initializeEventHandlers();
    });
}

const setPopups = data => {

  for(let i = 0; i < data.length; i++) {
    popupTexts.push(data[i][`popup`]);
    popupImages.push(data[i][`img`]);
  }

}

const initializeClock = () => {
  c = new Clock(time, timeUp);
  c.draw();
  // c.startTimer();
}

const initializeEventHandlers = () => {

  // attach event listeners to details
  $details = document.querySelectorAll(`.detail`);
  $details.forEach($detail => {
    $detail.addEventListener(`click`, handleDetailClick);
  });

  // attach event listener to colorFeedback
  $colorFeedback = document.querySelector(`.colorFeedback`);
  $colorFeedback.addEventListener(`click`, handleColorFeedbackClick);
}

const handleColorFeedbackClick = e => {
  // If this event gets triggerd, the user tapped the painting
  // but not a detail => negative.

  // add negative visual feedback to colorFeedback
  $colorFeedback.style.animationName = "feedBackNegative";
  $colorFeedback.style.animationDuration = "500ms";

  // Remove animation once finished
  setTimeout(() => {
    $colorFeedback.style.animationName = "";
    $colorFeedback.style.animationDuration = "";
  }, 500);

  if(tapInstructionVisible) {
    hideTapInstruction();
  }
}

const handleDetailClick = e => {

  $hints = document.querySelectorAll(`.hint`);

  // Get the id of the guessed detail
  const id = e.currentTarget.id;

  // Get the hint element that corresponds with the guessed detail,
  // add the guessed class
  $hints[id].classList.add('hint-guessed');

  // Remove the clickRegion of the guessed detail
  e.currentTarget.parentNode.removeChild(e.currentTarget);

  score++;
  let title;
  (score != amountOfDetails) ? title = 'Detail gevonden' : title = 'Laatste detail gevonden!';
  const p = new PopUp(`../assets/img/${popupImages[id]}`, title, popupTexts[id], popupFinished);
  p.draw();
  c.pauseTime();

  if(tapInstructionVisible) {
    hideTapInstruction();
  }

}

const hideTapInstruction = () => {
  const $tapInstruction = document.querySelector(`.tap-instruction`);
  $tapInstruction.classList.add(`tap-instruction-hide`);
  tapInstructionVisible = false;
}

const getScore = () => {
  const finalScore = Math.round((score * 3) + (c.secondsLeft / (time/2)), 0);
  localStorage.setItem(`score`, finalScore);

  return finalScore;
}

const popupFinished = () => {

  if(score == amountOfDetails) {
    localStorage.setItem(`score`, getScore());
    window.location.href = "endGood.html";
  }

  c.unpauseTime();
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

const init = () => {

    initializeGame();
    initializeClock();
}

init();
