const TweenLite = require('../../node_modules/gsap/src/uncompressed/TweenLite');
require('../../node_modules/gsap/src/uncompressed/plugins/CSSPlugin');

class BrushTimer {
    constructor(seconds, timeUp) {
        this.time = seconds;
        this.timeUp = timeUp;
        this.$brushStroke = document.querySelector(`.brush-timer`);;
    }

    draw() {
        TweenLite
        .to(this.$brushStroke, this.time, {
            css: {left: '-6vw'},
            ease: Linear.easeNone
        })
        .eventCallback("onComplete",() => this.timeUp());
    }
}

module.exports = BrushTimer
