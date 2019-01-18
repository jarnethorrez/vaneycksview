class Clock {

  constructor(seconds) {
    this.secondsLeft = seconds;
  }

  draw() {
    // Get div with class clock from DOM
    const $clockDiv = document.querySelector(`.clock`);

    // create the image element for the Clock
    const $clock = document.createElement(`img`);
    $clock.src="assets/img/clock3.png";

    // create the seconds
    const $timer = document.createElement(`p`);
    $timer.classList.add(`timer`);
    $timer.innerText = this.secondsLeft;

    $clockDiv.appendChild($clock);
    $clockDiv.appendChild($timer);
  }

}

module.exports = Clock
