// const TweenLite = require('../../node_modules/gsap/src/uncompressed/TweenLite');
// require('../../node_modules/gsap/src/uncompressed/plugins/CSSPlugin');

class BrushTimer {
    constructor(seconds, timeUp) {
        this.time = seconds;
        this.timeUp = timeUp;
        this.$brushStroke = document.querySelector(`.brush-timer`);
    }

    draw() {
        // console.log(`animation: brushTimer ${this.time}s;`);
        // this.$brushStroke.style.animation = `animation: brushTimer ${this.time}s;`;
    }
}

module.exports = BrushTimer
