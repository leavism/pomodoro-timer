let domWHour = document.querySelector("#work-hour");
let domWMinute = document.querySelector("#work-minute");
let domWSecond = document.querySelector("#work-second");
let wStartBtn = document.querySelector(".work-start");
let wPauseBtn = document.querySelector(".work-stop");

let domBHour = document.querySelector("#break-hour");
let domBMinute = document.querySelector("#break-minute");
let domBSecond = document.querySelector("#break-second");
let bStartBtn = document.querySelector(".break-start");
let bPauseBtn = document.querySelector(".break-stop");

let newSessionBtn = document.querySelector(".new-session");
let newBreakBtn = document.querySelector(".new-break");

let workCounting = false;
let breakCounting = false;
let wInterval;
let bInterval;

let wHour = domWHour.value = "00";
let wMinute = domWMinute.value = "25";
let wSecond = domWSecond.value = "00";
let wDate = new Date(0,0,0, wHour, wMinute, wSecond);

let bHour = domBHour.value = "00";
let bMinute = domBMinute.value = "05";
let bSecond = domBSecond.value = "00";
let bDate = new Date(0,0,0, bHour, bMinute, bSecond);

newSessionBtn.addEventListener("click", () => {
  wHour = domWHour.value = "00";
  wMinute = domWMinute.value = "25";
  wSecond = domWSecond.value = "00";
})
newBreakBtn.addEventListener("click", () => {
  bHour = domBHour.value = "00";
  bMinute = domBMinute.value = "05";
  bSecond = domBSecond.value = "00";
})

wStartBtn.addEventListener("click", () => {
  workTimer()
});

wPauseBtn.addEventListener("click", () => {
  enableBtns();
  workCounting = false;
  clearInterval(wInterval);
})

bStartBtn.addEventListener("click", () => {
  breakTimer();
});

bPauseBtn.addEventListener("click", () => {
  enableBtns();
  breakCounting = false;
  clearInterval(bInterval);
})

function workTimer(twentyfive) {
  document.querySelectorAll("button").forEach( btn => {
    if(btn !== wPauseBtn) btn.setAttribute("disabled", "disabled")
  })
  if(twentyfive) {
    workCounting = true;
    wHour = 0;
    wMinute = 25;
    wSecond = 0;
    wDate = new Date(0,0,0, wHour, wMinute, wSecond);

    wInterval = setInterval(function() {
      wDate.setSeconds(wDate.getSeconds() - 1);

      domWHour.value = doubledigits(wDate.getHours());
      domWMinute.value = doubledigits(wDate.getMinutes());
      domWSecond.value = doubledigits(wDate.getSeconds());

      let sum = wDate.getHours() + wDate.getMinutes() + wDate.getSeconds();
      if (sum <= 0) {
        clearInterval(wInterval);
        workCounting = false;
        alert("Work time over. Please take a break");
        enableBtns();
      }
    }, 1000)
  } else {
    workCounting = true;
    wHour = domWHour.value
    wMinute = domWMinute.value
    wSecond = domWSecond.value
    wDate = new Date(0,0,0, wHour, wMinute, wSecond);
    wInterval = setInterval(function() {
      wDate.setSeconds(wDate.getSeconds() - 1);

      domWHour.value = doubledigits(wDate.getHours());
      domWMinute.value = doubledigits(wDate.getMinutes());
      domWSecond.value = doubledigits(wDate.getSeconds());

      let sum = wDate.getHours() + wDate.getMinutes() + wDate.getSeconds();
      if (sum <= 0) {
        clearInterval(wInterval);
        workCounting = false;
        alert("Work time over. Please take a break");
        enableBtns();
      }
    }, 1000)
  }
}

function breakTimer(five) {
  document.querySelectorAll("button").forEach( btn => {
    if(btn !== bPauseBtn) btn.setAttribute("disabled", "disabled")
  })
  if(five) {
    breakCounting = true;
    bHour = 0;
    bMinute = 5;
    bSecond = 0;
    bDate = new Date(0,0,0, bHour, bMinute, bSecond);

    bInterval = setInterval(function() {
      bDate.setSeconds(bDate.getSeconds() - 1);

      domBHour.value = doubledigits(bDate.getHours());
      domBMinute.value = doubledigits(bDate.getMinutes());
      domBSecond.value = doubledigits(bDate.getSeconds());

      let sum = bDate.getHours() + bDate.getMinutes() + bDate.getSeconds();
      if (sum <= 0) {
        clearInterval(bInterval);
        breakCounting = false;
        alert("Break time is over. Please start working again.")
        enableBtns();
      }
    }, 1000)
  } else {
    breakCounting = true;
    bHour = domBHour.value
    bMinute = domBMinute.value
    bSecond = domBSecond.value
    bDate = new Date(0,0,0, bHour, bMinute, bSecond);

    bInterval = setInterval(function() {
      bDate.setSeconds(bDate.getSeconds() - 1);

      domBHour.value = doubledigits(bDate.getHours());
      domBMinute.value = doubledigits(bDate.getMinutes());
      domBSecond.value = doubledigits(bDate.getSeconds());

      let sum = bDate.getHours() + bDate.getMinutes() + bDate.getSeconds();
      if (sum <= 0) {
        clearInterval(bInterval);
        breakCounting = false;
        alert("Break time is over. Please start working again.")
        enableBtns();
      }
    }, 1000)
  }
}

function doubledigits(number) {
  return ("0" + number).slice(-2)
}

function enableBtns(){
  document.querySelectorAll("button").forEach( btn => {
    btn.removeAttribute("disabled")
  })
}