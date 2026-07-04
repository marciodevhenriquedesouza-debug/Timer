const mil = document.querySelector('.mil');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let timer;

function removeActiveClass() {
    startBtn.classList.remove('activeStart');
    pauseBtn.classList.remove('activePause');
    resetBtn.classList.remove('activeReset');
}
function removeColorClass() {
    mil.classList.remove('green');
    mil.classList.remove('red');
    sec.classList.remove('green');
    sec.classList.remove('red');
    min.classList.remove('green');
    min.classList.remove('red');
}

startBtn.addEventListener('click', () => {
    removeActiveClass();
    removeColorClass();
    startBtn.classList.add('activeStart');
    mil.classList.add('green');
    sec.classList.add('green');
    min.classList.add('green');
    clearInterval(timer);
    timer = setInterval(updateTimer, 10);
});

pauseBtn.addEventListener('click', () => {
    removeColorClass();
    removeActiveClass();
    pauseBtn.classList.add('activePause');
    mil.classList.add('red');
    sec.classList.add('red');
    min.classList.add('red');
    clearInterval(timer);
});

resetBtn.addEventListener('click', () => {
    removeColorClass();
    removeActiveClass();
    resetBtn.classList.add('activeReset');
    clearInterval(timer);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
});

function updateTimer() {
    miliseconds += 1;
    if (miliseconds >= 100) {
        miliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    mil.textContent = String(miliseconds).padStart(2, '0');
    sec.textContent = String(seconds).padStart(2, '0');
    min.textContent = String(minutes).padStart(2, '0');
}
