const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");

const timeInput = document.querySelector("#minutes");

const timerMinutes = document.querySelector("#min");
const timerSeconds = document.querySelector("#sec");
let minutes = 0;
let seconds = 0;
let clock;
let isPaused = false;

startBtn.addEventListener("click", startClock);

resetBtn.addEventListener("click", reset);

pauseBtn.addEventListener("click", pause);

function startClock() {
  if (!isPaused) {
    let time = Number(timeInput.value);
    if (time <= 0) return;
    minutes = time - 1;
    seconds = 59;
    timeInput.value = "";
  }
  startBtn.setAttribute("disabled", "");

  pauseBtn.removeAttribute("disabled");
  isPaused = false;

  clock = setInterval(() => {
    if (seconds === 0 && minutes === 0) {
      clearInterval(clock);
      startBtn.removeAttribute("disabled");
      return;
    }
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    timerMinutes.innerText = minutes;
    timerSeconds.innerText = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}

function reset() {
  clearInterval(clock);
  isPaused = false;
  timeInput.value = "";
  timerMinutes.innerText = "0";
  timerSeconds.innerText = "00";
  startBtn.removeAttribute("disabled");
  pauseBtn.removeAttribute("disabled");
}
function pause() {
  clearInterval(clock);
  isPaused = true;
  startBtn.removeAttribute("disabled");
  pauseBtn.setAttribute("disabled", "");
}
