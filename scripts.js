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
