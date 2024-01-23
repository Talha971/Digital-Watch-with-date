var now = new Date();
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();
var miliSec = now.getMilliseconds();

var getHour = document.getElementById("hour");
var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMiliSec = document.getElementById("miliSec");

getMiliSec.innerHTML = miliSec;
getSec.innerHTML = sec;
getMin.innerHTML = min;
getHour.innerHTML = hour;
miliSec = 0;
setInterval(() => {
  miliSec++;
  getMiliSec.innerHTML = miliSec;
  if (miliSec == 100) {
    miliSec = 0;
    sec++;
    getSec.innerHTML = sec;
  } else if (sec == 60) {
    sec = 0;
    min++;
    getMin.innerHTML = min;
  } else if (min == 60) {
    min = 0;
    hour++;
    getHour.innerHTML = hour;
  } else if (hour == 23) {
    hour = 0;
    min = 0;
  }
}, 10);

var currentDate = document.write(
  "<br>" +
    now.getDate() +
    " / " +
    (now.getMonth() + 1) +
    " / " +
    now.getFullYear()
);
