let domTimer = document.querySelector(".timer");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");

let counting = false;
let interval;
let target;
let timer;

let startTimer = startBtn.addEventListener("click", () => {
  if (!counting) {
    target = new Date().getTime() + (1000 * parseTime(domTimer.textContent));
    target = Math.round(target)
    timer = domTimer.textContent = parseSecond((target - new Date().getTime())/1000)
    counting = true;

    interval = setInterval(function() {  
      timer = Math.round(timer - 1000)
      timer = domTimer.textContent = parseSecond((target - new Date().getTime())/1000)

      if (timer <= 0) {
        clearInterval(interval);
        counting = false;
      }
    }, 1000)
  }
});

stopBtn.addEventListener("click", () => {
  counting = false;
  clearInterval(interval)
});

// Takes in a time string ("HH:MM:SS")
// return integer representing seconds
function parseTime(timeString) {
  timeArray = timeString.split(":", 3)

  bill = timeArray.every((value) => {
    return parseInt(value) > 60
  })
  if (bill) return "HH:MM:SS";

  seconds = 0;
  
  seconds += parseInt(timeArray[2]);
  seconds += parseInt(timeArray[1]) * 60;
  seconds += parseInt(timeArray[0]) * 3600;
  return seconds;
}

// Takes in seconds
// return a string (HH:MM:SS)
function parseSecond(secondsInt) {
  let seconds = Math.floor(secondsInt % 60);
  let minutes = Math.floor(secondsInt / 60);
  let hours = Math.floor(minutes / 60);
  if (seconds % 60 == 0) {
    minutes = (minutes % 60) - 1
  } else {
    minutes = minutes % 60;
  }

  return `${hours}:${minutes}:${seconds}`;
}