
let todaysDate = new Date();
console.log(todaysDate);
let dateElement = document.getElementById('date');
console.log(dateElement);
dateElement.innerHTML = todaysDate.toISOString().substring(0, 10);