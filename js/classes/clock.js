class Clock {

  constructor() {
    console.log(`hallo ik ben een klokje`);
  }

  draw() {
    const $clockDiv = document.querySelector(`.clock`);

    const $clock = document.createElement(`img`);
    $clock.src="assets/img/clock3.png";

    $clockDiv.appendChild($clock);
  }

}

module.exports = Clock
