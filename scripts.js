let getTodaysDate = new Date();
let todaysDateISO = getTodaysDate.toISOString().substring(0, 10);
let todaysDateTime = getTodaysDate.getTime();
console.log(todaysDateTime);
let dateElement = document.getElementById("date");

dateElement.innerHTML = todaysDateISO;

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
function showFikaDays(jsonFikaDays) {
  const fikaDays = jsonFikaDays["data"];
  let fikaDaysElement = document.getElementById("fikaDaysContainer");

  for (let i = 0; i < fikaDays.length; i++) {
    const fikaDayElement = document.createElement("div");
    const fikaDayNameElement = document.createElement("a");
    fikaDayNameElement.setAttribute(
      "href",
      "http://google.com/search?q=" + fikaDays[i].name + "+recept"
    );
    fikaDayNameElement.className = "fikaName";
    const fikaDayDateElement = document.createElement("span");
    fikaDayElement.id = "fika-day-" + i;
    fikaDayNameElement.innerHTML = fikaDays[i].name;
    let fikaDayDate = new Date(fikaDays[i].date).toISOString().substring(0, 10);
    fikaDayDateElement.innerHTML = " - " + fikaDayDate;
    fikaDayElement.appendChild(fikaDayNameElement);
    fikaDayElement.appendChild(fikaDayDateElement);
    fikaDaysElement.appendChild(fikaDayElement);

    let fikaDateTime = new Date(fikaDays[i].date).getTime();
    let dateDiff = fikaDateTime - todaysDateTime;

    if (todaysDateISO === fikaDayDate) {
      let todaysFikaDay = document.getElementById("todaysFikaDay");
      todaysFikaDay.innerHTML = "Today is " + fikaDays[i].name;
    }
    if (dateDiff > 0) {
      nextFikaDays.push(fikaDays[i].name);
    }
    nextFikaDay.innerHTML = "Next fika day is " + nextFikaDays[0];
  }
  console.log(fikaDays);
  console.log(nextFikaDays);
}

let requestURL = "https://diydata.dev/api/swedishfikadays/2020/";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
// console.log(request.response);

request.onload = function () {
  const fikaDays = request.response;
  console.log(fikaDays);
  showFikaDays(fikaDays);
};
