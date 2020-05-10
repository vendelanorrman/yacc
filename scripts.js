let todaysDate = new Date();

let dateElement = document.getElementById("date");

dateElement.innerHTML = todaysDate.toISOString().substring(0, 10);
