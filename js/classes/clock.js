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

    // Add created elements to .clock element
    $clockDiv.appendChild($clock);
    $clockDiv.appendChild($timer);
  }

  startTimer() {
    // Start timer on every second
    const timer = setInterval(() => {
      //remove 1 second from seconds left & update visual clock
      this.secondsLeft--;
      this.updateClock();

      // if no seconds are left, clear timer.
      if(this.secondsLeft == 0) {
        clearInterval(timer);
      }

    }, 1000);

  }

  updateClock() {
    const $timer = document.querySelector(`.timer`);
    $timer.innerText = this.secondsLeft;
  }

}

module.exports = Clock
