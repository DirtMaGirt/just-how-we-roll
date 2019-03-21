/*
# ========================================================
# = Initialization
# ========================================================
*/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;
setStartingImages();

function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);

    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);


}

function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;

    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.src = SIX_SIDED_START_IMAGE;

    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD12Roll1.src = SIX_SIDED_START_IMAGE;
    doubleD12Roll2.src = SIX_SIDED_START_IMAGE;

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.src = `${START_DIRECTORY}/d12.jpeg`;

    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.src = `${START_DIRECTORY}/d20.jpg`;
}

/*
# ========================================================
# = Roll Functions
# ========================================================
*/
//Get a random number from 1-6, using Math.random, Math.ceil, and the number 6. Save it somewhere, because we'll be using it


function rollD6() {
    const rollSingle;

}

function rollDoubleD6() {
    const rollSingle;
    rollSingle = Math.floor(Math.random() * 6);
    rollSingle = Math.floor(Math.random() * 6);
    sixes.push(rollSingle);

}

function rollD12() {
    const rollSingle;
    rollSingle = Math.floor(Math.random() * 6);
    rollSingle = Math.floor(Math.random() * 6);
    sixes.push(rollSingle);

}

function rollD20() {
    const rollSingle;
    rollSingle = Math.floor(Math.random() * 6);
    rollSingle = Math.floor(Math.random() * 6);
    sixes.push(rollSingle);

}
/*
# ========================================================
# = Math Functions
# ========================================================
*/

/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/