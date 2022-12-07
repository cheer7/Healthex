`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
/* Date and time created in JavaScript are represented with the Date object.
 can’t create "only date" or "only time".
Months are counted from zero.So Januaruy is zero month to get exact month add one.
Days of week in getDay() are also counted from zero.So Sunday is zero day to exact day add one.
Dates can be subtracted, giving their difference in milliseconds. That’s because a Date becomes the timestamp when converted to a number.
Use Date.now() to get the current timestamp fast.*/
