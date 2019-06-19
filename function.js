let domHour = document.querySelector("#hour");
let domMinute = document.querySelector("#minute");
let domSecond = document.querySelector("#second");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");

let counting = false;
let interval;


let startTimer = startBtn.addEventListener("click", () => {
  if (!counting) {
    counting = true;

    let hour = (parseInt(domHour.value) > 0) ? parseInt(domHour.value) : 0;
    let minute = (parseInt(domMinute.value) > 0 ) ? parseInt(domMinute.value) : 0;
    let second = (parseInt(domSecond.value) > 0) ? parseInt(domSecond.value) : 0;

    target = new Date(0, 0, 0, hour, minute, second)

    interval = setInterval(function() {  
      target.setSeconds(target.getSeconds() - 1);

      domHour.value = doubledigits(target.getHours());
      domMinute.value = doubledigits(target.getMinutes());
      domSecond.value = doubledigits(target.getSeconds());

      let sum = target.getHours() + target.getMinutes() + target.getSeconds();
      if (sum <= 0) {
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

// Takes in a single digit number
// returns string that is double digit of number (09, 02, 04)
function doubledigits(number) {
  return ("0" + number).slice(-2)
}