import { data } from "/daysThisYear.js";

let Y = new Date().getFullYear();

document.getElementById("thisYear").innerHTML = "Fikadagar " + Y;
document.getElementById("nextYear").innerHTML = "Fikadagar " + (Y + 1);
document.getElementById("thisYearHeader").innerHTML = "Svenska Fikadagar " + Y;

function showFikaDays() {
  const fikaDays = data;
  let fikaDaysElement = document.getElementById("fikaDaysContainer");

  for (let i = 0; i < fikaDays.length; i++) {
    const fikaDayElement = document.createElement("div");
    const fikaDayNameElement = document.createElement("a");
    fikaDayNameElement.setAttribute(
      "href",
      "/om dagarna/" + fikaDays[i].name + ".html"
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
  }
}

showFikaDays();
