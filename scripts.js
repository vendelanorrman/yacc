import { data } from "/daysThisYear.js";

let Y = new Date().getFullYear();

document.getElementById("thisYear").innerHTML = "Fikadagar " + Y;
document.getElementById("nextYear").innerHTML = "Fikadagar " + (Y + 1);

let getTodaysDate = new Date();
let todaysDateFormated = getTodaysDate.toLocaleString("sv-SE", {
  day: "numeric",
  month: "long",
});
let todaysDateISO = getTodaysDate.toISOString().substring(0, 10);
let todaysDateTime = getTodaysDate.getTime();
console.log(todaysDateISO);
console.log(todaysDateTime);
let dateElement = document.getElementById("date");

dateElement.innerHTML = todaysDateFormated;

let nextFikaDays = [];
let todaysFikaDays = [];
function showFikaDays() {
  const fikaDays = data;
  let fikaDaysElement = document.getElementById("fikaDaysContainer");

  for (let i = 0; i < fikaDays.length; i++) {
    const fikaDayElement = document.createElement("div");
    const fikaDayNameElement = document.createElement("a");
    const fikaDayDateElement = document.createElement("span");
    let fikaDayDate = new Date(fikaDays[i].date).toISOString().substring(0, 10);
    fikaDayElement.appendChild(fikaDayNameElement);
    fikaDayElement.appendChild(fikaDayDateElement);
    fikaDaysElement.appendChild(fikaDayElement);

    let fikaDateTime = new Date(fikaDays[i].date).getTime();
    let dateDiff = fikaDateTime - todaysDateTime;

    if (todaysDateISO === fikaDayDate) {
      todaysFikaDays.push(fikaDays[i].name);
      let todaysFikaDay = document.getElementById("todaysFikaDay");
      todaysFikaDay.innerHTML =
        "Idag är det " +
        '<a href="om%20dagarna/' +
        todaysFikaDays[0] +
        '.html"' +
        ">" +
        todaysFikaDays[0] +
        "</a>" +
        '<br><br><img src="images/' +
        todaysFikaDays[0] +
        '.jpg">';
      if (todaysFikaDays.length > 1) {
        todaysFikaDay.innerHTML += " och " + todaysFikaDays[1];
      }
    }

    if (dateDiff > 0) {
      nextFikaDays.push(fikaDays[i].name, fikaDays[i].date);
    }
    let nextFikaDayFormatDate = new Date(nextFikaDays[1]).toLocaleString(
      "sv-SE",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
      }
    );

    nextFikaDay.innerHTML =
      nextFikaDayFormatDate.charAt(0).toUpperCase() +
      nextFikaDayFormatDate.slice(1) +
      " är det " +
      nextFikaDays[0];

    if (nextFikaDays[1] === nextFikaDays[3]) {
      nextFikaDay.innerHTML =
        nextFikaDayFormatDate.charAt(0).toUpperCase() +
        nextFikaDayFormatDate.slice(1) +
        " är det " +
        nextFikaDays[0] +
        " och " +
        nextFikaDays[2];
    }
  }
}

showFikaDays();

console.log(todaysFikaDays);
