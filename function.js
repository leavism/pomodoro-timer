let domTimer = document.querySelector(".timer");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");

let counting = false;
let interval;


let target = new Date().getTime() + (1000 * 7);
let timer = domTimer.textContent = target - (new Date().getTime());

let startTimer = startBtn.addEventListener("click", () => {
  if (!counting) {
    counting = true;
    interval = setInterval(function() {
      timer = domTimer.textContent = timer - 1000
      if (timer <= 0) clearInterval(interval);
    }, 1000)
  }
});

stopBtn.addEventListener("click", () => {
  counting = false;
  clearInterval(interval)
});
