let Y = new Date().getFullYear();
//console.log(Y);

//nthDay documentation: https://www.i-programmer.info/programming/javascript/6322-date-hacks-doing-javascript-date-calculations.html?start=1
const nthDay = (month, nthDay, weekday) =>
  nthDayInMonth(nthDay, weekday, month).getDate();

function firstDayInMonth(day, m, y = Y) {
  return new Date(y, m, 1 + ((day - new Date(y, m, 1).getDay() + 7) % 7));
}
function nthDayInMonth(n, day, m) {
  const d = firstDayInMonth(day, m);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (n - 1) * 7);
}

// documentation from https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
function getEaster(year = Y) {
  var f = Math.floor,
    // Golden Number - 1
    G = year % 19,
    C = f(year / 100),
    // related to Epact
    H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
    // number of days from 21 March to the Paschal full moon
    I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
    // weekday for the Paschal full moon
    J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
    // number of days from 21 March to the Sunday on or before the Paschal full moon
    L = I - J,
    month = 3 + f((L + 40) / 44),
    day = L + 28 - 31 * f(month / 4);

  return new Date(year, month - 1, day);
}

//47 days after easter
function getFettisdagen() {
  return new Date(getEaster().setDate(getEaster().getDate() - 47));
}

let data = [
  {
    date: new Date(Y, 0, 12).toLocaleString("sv-SE").substring(0, 10),
    name: "Marsipanens dag",
  },
  {
    date: new Date(Y, 1, 3).toLocaleString("sv-SE").substring(0, 10),
    name: "Morotskakans dag",
  },
  {
    date: new Date(Y, 1, 5).toLocaleString("sv-SE").substring(0, 10),
    name: "Nutelladagen",
  },
  {
    date: new Date(Y, 1, 15).toLocaleString("sv-SE").substring(0, 10),
    name: "Geléhallonens dag",
  },
  {
    date: getFettisdagen().toLocaleString("sv-SE").substring(0, 10),
    name: "Fettisdagen",
  },
  {
    date: new Date(Y, 2, 3).toLocaleString("sv-SE").substring(0, 10),
    name: "Mandelkubbens dag",
  },
  {
    date: new Date(Y, 2, 7).toLocaleString("sv-SE").substring(0, 10),
    name: "Punschrullens dag",
  },
  {
    date: new Date(Y, 2, 13).toLocaleString("sv-SE").substring(0, 10),
    name: "Mazarindagen",
  },
  {
    date: new Date(Y, 2, 25).toLocaleString("sv-SE").substring(0, 10),
    name: "Våffeldagen",
  },
  {
    date: new Date(Y, 3, nthDay(3, 2, 6))
      .toLocaleString("sv-SE")
      .substring(0, 10),
    name: "Surdegsdagen",
  },
  {
    date: new Date(Y, 3, 12).toLocaleString("sv-SE").substring(0, 10),
    name: "Lakritsdagen",
  },
  {
    date: new Date(Y, 3, 20).toLocaleString("sv-SE").substring(0, 10),
    name: "Polkagrisens dag",
  },
  {
    date: new Date(Y, 4, 1).toLocaleString("sv-SE").substring(0, 10),
    name: "Budapestbakelsens dag",
  },
  {
    date: new Date(Y, 4, 11).toLocaleString("sv-SE").substring(0, 10),
    name: "Chokladbollens dag",
  },
  {
    date: new Date(Y, 4, nthDay(4, 2, 3))
      .toLocaleString("sv-SE")
      .substring(0, 10),
    name: "Syltkakans dag",
  },
  {
    date: new Date(Y, 4, 15).toLocaleString("sv-SE").substring(0, 10),
    name: "Kardemummabullens dag",
  },
  {
    date: new Date(Y, 4, 27).toLocaleString("sv-SE").substring(0, 10),
    name: "Muffinsdagen",
  },
  {
    date: new Date(Y, 7, 9).toLocaleString("sv-SE").substring(0, 10),
    name: "Rulltårtans dag",
  },
  {
    date: new Date(Y, 8, 29).toLocaleString("sv-SE").substring(0, 10),
    name: "Kaffedagen",
  },
  {
    date: new Date(Y, 9, nthDay(9, 1, 0))
      .toLocaleString("sv-SE")
      .substring(0, 10),
    name: "Gräddtårtans dag",
  },
  {
    date: new Date(Y, 9, 4).toLocaleString("sv-SE").substring(0, 10),
    name: "Kanelbullens dag",
  },
  {
    date: new Date(Y, 9, 11).toLocaleString("sv-SE").substring(0, 10),
    name: "Äppelmustens dag",
  },
  {
    date: new Date(Y, 9, 14).toLocaleString("sv-SE").substring(0, 10),
    name: "Räkmackans dag",
  },
  {
    date: new Date(Y, 9, 18).toLocaleString("sv-SE").substring(0, 10),
    name: "Chokladmuffinsens dag",
  },
  {
    date: new Date(Y, 10, 7).toLocaleString("sv-SE").substring(0, 10),
    name: "Kladdkakans dag",
  },
  {
    date: new Date(Y, 10, 11).toLocaleString("sv-SE").substring(0, 10),
    name: "Chokladens dag",
  },
  {
    date: new Date(Y, 10, 13).toLocaleString("sv-SE").substring(0, 10),
    name: "Smörgåstårtans dag",
  },
  {
    date: new Date(Y, 10, 14).toLocaleString("sv-SE").substring(0, 10),
    name: "Ostkakans dag",
  },
  {
    date: new Date(Y, 10, 22).toLocaleString("sv-SE").substring(0, 10),
    name: "Wienerbrödets dag",
  },
  {
    date: new Date(Y, 11, 9).toLocaleString("sv-SE").substring(0, 10),
    name: "Pepparkakans dag",
  },
  {
    date: new Date(Y, 11, 18).toLocaleString("sv-SE").substring(0, 10),
    name: "Kakans dag",
  },
  {
    date: new Date(Y, 11, 21).toLocaleString("sv-SE").substring(0, 10),
    name: "Skumtomtens dag",
  },
];
//console.log(data);

export { data };
