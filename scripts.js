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
console.log(todaysDateTime);
let dateElement = document.getElementById("date");

dateElement.innerHTML = todaysDateFormated;

function myFunction() {
  let x = document.getElementById("button");
  let y = document.getElementById("cake");
  if (x.innerHTML === "Light the candles!") {
    x.innerHTML = "Blow out candles";
    y.src = "images/cake-icon.png";
  } else {
    x.innerHTML = "Light the candles!";
    y.src = "images/cake-icon-off.png";
  }
}

let nextFikaDays = [];
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
      let todaysFikaDay = document.getElementById("todaysFikaDay");
      todaysFikaDay.innerHTML = "Idag är det " + fikaDays[i].name;
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
  }
}
// let requestURL = "https://diydata.dev/api/swedishfikadays/2020/";
// let request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();
// console.log(request.response);

// request.onload = function () {
//   const fikaDays = request.response;
//   console.log(fikaDays);
//   showFikaDays(fikaDays);
// };
console.log(showFikaDays());
