let Y = new Date().getFullYear();
console.log(Y);

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

let data = [
  {
    date: new Date(Y, 0, 12).toLocaleString("sv-SE").substring(0, 10),
    name: "Marsipanens dag",
  },
  {
    date: new Date(Y, 01, 03).toLocaleString("sv-SE").substring(0, 10),
    name: "Morotskakans dag",
  },
  {
    date: new Date(Y, 01, 05).toLocaleString("sv-SE").substring(0, 10),
    name: "Nutelladagen",
  },
  {
    date: new Date(Y, 02, 15).toLocaleString("sv-SE").substring(0, 10),
    name: "Geléhallonens dag",
  },
  {
    date: new Date(Y, 02, 25).toLocaleString("sv-SE").substring(0, 10),
    name: "Fettisdagen",
  },
  {
    date: new Date(Y, 03, 03).toLocaleString("sv-SE").substring(0, 10),
    name: "Mandelkubbens dag",
  },
  {
    date: new Date(Y, 03, 07).toLocaleString("sv-SE").substring(0, 10),
    name: "Punschrullens dag",
  },
  {
    date: new Date(Y, 03, 13).toLocaleString("sv-SE").substring(0, 10),
    name: "Mazarindagen",
  },
  {
    date: new Date(Y, 03, 25).toLocaleString("sv-SE").substring(0, 10),
    name: "Våffeldagen",
  },
  {
    date: new Date(Y, 03, nthDay(03, 2, 6))
      .toLocaleString("sv-SE")
      .substring(0, 10),
    name: "Surdegsdagen",
  },
  {
    date: new Date(Y, 04, 12).toLocaleString("sv-SE").substring(0, 10),
    name: "Lakritsdagen",
  },
  {
    date: new Date(Y, 04, 20).toLocaleString("sv-SE").substring(0, 10),
    name: "Polkagrisens dag",
  },
  {
    date: new Date(Y, 05, 01).toLocaleString("sv-SE").substring(0, 10),
    name: "Budapestbakelsens dag",
  },
  {
    date: new Date(Y, 05, 11).toLocaleString("sv-SE").substring(0, 10),
    name: "Chokladbollens dag",
  },
  {
    date: new Date(Y, 04, nthDay(04, 2, 3))
      .toLocaleString("sv-SE")
      .substring(0, 10),
    name: "Syltkakans dag",
  },
  {
    date: new Date(Y, 05, 15).toLocaleString("sv-SE").substring(0, 10),
    name: "Kardemummabullens dag",
  },
  {
    date: new Date(Y, 05, 27).toLocaleString("sv-SE").substring(0, 10),
    name: "Muffinsdagen",
  },
  {
    date: new Date(Y, 08, 09).toLocaleString("sv-SE").substring(0, 10),
    name: "Rulltårtans dag",
  },
  {
    date: new Date(Y, 09, 29).toLocaleString("sv-SE").substring(0, 10),
    name: "Kaffedagen",
  },
  {
    date: new Date(Y, 10, 04).toLocaleString("sv-SE").substring(0, 10),
    name: "Kanelbullens dag",
  },
  {
    date: new Date(Y, 09, nthDay(09, 1, 0))
      .toLocaleString("sv-SE")
      .substring(0, 10),
    name: "Gräddtårtans dag",
  },
  {
    date: new Date(Y, 10, 11).toLocaleString("sv-SE").substring(0, 10),
    name: "Äppelmustens dag",
  },
  {
    date: new Date(Y, 10, 14).toLocaleString("sv-SE").substring(0, 10),
    name: "Räkmackans dag",
  },
  {
    date: new Date(Y, 10, 18).toLocaleString("sv-SE").substring(0, 10),
    name: "Chokladmuffinsens dag",
  },
  {
    date: new Date(Y, 11, 17).toLocaleString("sv-SE").substring(0, 10),
    name: "Kladdkakans dag",
  },
  {
    date: new Date(Y, 11, 11).toLocaleString("sv-SE").substring(0, 10),
    name: "Chokladens dag",
  },
  {
    date: new Date(Y, 11, 13).toLocaleString("sv-SE").substring(0, 10),
    name: "Smörgåstårtans dag",
  },
  {
    date: new Date(Y, 11, 14).toLocaleString("sv-SE").substring(0, 10),
    name: "Ostkakans dag",
  },
  {
    date: new Date(Y, 11, 22).toLocaleString("sv-SE").substring(0, 10),
    name: "Wienerbrödets dag",
  },
  {
    date: new Date(Y, 12, 09).toLocaleString("sv-SE").substring(0, 10),
    name: "Pepparkakans dag",
  },
  {
    date: new Date(Y, 12, 18).toLocaleString("sv-SE").substring(0, 10),
    name: "Kakans dag",
  },
  {
    date: new Date(Y, 12, 21).toLocaleString("sv-SE").substring(0, 10),
    name: "Skumtomtens dag",
  },
];
console.log(data);
