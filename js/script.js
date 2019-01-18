const Clock = require('./js/classes/clock');

const init = () => {
    console.log(`init called from script.js`);

    let c = new Clock();
    c.draw();
}

init();
