// variables in javascript
let name1="Harshita";
let age=20;
const address="Indore";
console.log("Student name:",name1);
console.log("Student Age:", age);
console.log("Address:",address);
//without async/await
loadMovie()
  .then(movie => {
    console.log("Movie loaded:", movie);
    return watchMovie();
  })
  .then(() => {
    return orderSnacks();
  })
  .then(() => {
    console.log("Enjoying!");
  });
  //with async/await
  function loadMovie() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Avengers"), 2000);
  });
}

function watchMovie() {
  console.log("Watching movie...");
}

function orderSnacks() {
  console.log("Snacks ordered ");
}

async function startMovieNight() {
  console.log("Opening app...");

  const movie = await loadMovie(); // wait here
  console.log("Movie loaded:", movie);

  watchMovie();
  orderSnacks();

  console.log("Enjoying!");
}

startMovieNight();
//another example
function boilWater() {
  return new Promise(res => setTimeout(() => res("Water boiled"), 1000));
}

function cookNoodles() {
  return new Promise(res => setTimeout(() => res("Noodles cooked"), 1500));
}

async function cook() {
  console.log(await boilWater());
  console.log(await cookNoodles());
  console.log("Food ready!");
}

cook();
//different
async function run() {
  const p1 = boilWater();
  const p2 = cookNoodles();

  const results = await Promise.all([p1, p2]);

  console.log(results);
}

run();