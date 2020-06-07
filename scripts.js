let todaysDate = new Date();

let dateElement = document.getElementById("date");

dateElement.innerHTML = todaysDate.toISOString().substring(0, 10);

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

function showFikaDays(jsonFikaDays) {
  const fikaDays = jsonFikaDays["data"];
  let fikaDaysElement = document.getElementById("fikaDaysContainer");
  for (let i = 0; i < fikaDays.length; i++) {
    const fikaDayElement = document.createElement("div");
    const fikaDayNameElement = document.createElement("span");
    const fikaDayDateElement = document.createElement("span");

    fikaDayElement.id = "fika-day-" + i;
    fikaDayNameElement.innerHTML = fikaDays[i].name;
    fikaDayDateElement.innerHTML =
      " - " + new Date(fikaDays[i].date).toISOString().substring(0, 10);
    fikaDayElement.appendChild(fikaDayNameElement);
    fikaDayElement.appendChild(fikaDayDateElement);
    fikaDaysElement.appendChild(fikaDayElement);

    // const myH2 = document.createElement("h2");
    // myH2.textContent = heroes[i].name;
    // myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    // const superPowers = heroes[i].powers;
    // myArticle.appendChild(myList);
    // section.appendChild(myArticle);
  }
  console.log(fikaDays);
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
