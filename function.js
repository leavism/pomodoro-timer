let domWHour = document.querySelector("#work-hour");
let domWMinute = document.querySelector("#work-minute");
let domWSecond = document.querySelector("#work-second");
let wStartBtn = document.querySelector(".work-start");
let wStopBtn = document.querySelector(".work-stop");

let domBHour = document.querySelector("#break-hour");
let domBMinute = document.querySelector("#break-minute");
let domBSecond = document.querySelector("#break-second");
let bStartBtn = document.querySelector(".break-start");
let bStopBtn = document.querySelector(".break-stop");

let workCounting = false;
let breakCounting = false;
let interval;

wStartBtn.addEventListener("click",  function startTimer() {
  if (!workCounting) {
    workCounting = true;

    let hour = (parseInt(domWHour.value) > 0) ? parseInt(domWHour.value) : 0;
    let minute = (parseInt(domWMinute.value) > 0 ) ? parseInt(domWMinute.value) : 0;
    let second = (parseInt(domWSecond.value) > 0) ? parseInt(domWSecond.value) : 0;

    target = new Date(0, 0, 0, hour, minute, second)

    interval = setInterval(function() {  
      target.setSeconds(target.getSeconds() - 1);

      domWHour.value = doubledigits(target.getHours());
      domWMinute.value = doubledigits(target.getMinutes());
      domWSecond.value = doubledigits(target.getSeconds());

      let sum = target.getHours() + target.getMinutes() + target.getSeconds();
      if (sum <= 0) {
        clearInterval(interval);
        workCounting = false;
      }
    }, 1000)
  }
});

wStopBtn.addEventListener("click", () => {
  workCounting = false;
  clearInterval(interval)
});

bStartBtn.addEventListener("click",  function startTimer() {
  if (!workCounting) {
    breakCounting = true;

    let hour = (parseInt(domBHour.value) > 0) ? parseInt(domBHour.value) : 0;
    let minute = (parseInt(domBMinute.value) > 0 ) ? parseInt(domBMinute.value) : 0;
    let second = (parseInt(domBSecond.value) > 0) ? parseInt(domBSecond.value) : 0;

    target = new Date(0, 0, 0, hour, minute, second)

    interval = setInterval(function() {  
      target.setSeconds(target.getSeconds() - 1);

      domBHour.value = doubledigits(target.getHours());
      domBMinute.value = doubledigits(target.getMinutes());
      domBSecond.value = doubledigits(target.getSeconds());

      let sum = target.getHours() + target.getMinutes() + target.getSeconds();
      if (sum <= 0) {
        clearInterval(interval);
        breakCounting = false;
      }
    }, 1000)
  }
});

bStopBtn.addEventListener("click", () => {
  breakCounting = false;
  clearInterval(interval)
});


// Takes in a single digit number
// returns string that is double digit of number (09, 02, 04)
function doubledigits(number) {
  return ("0" + number).slice(-2)
}