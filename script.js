// function greet() {
//   console.log("HI I LOVE YOU!");
// }

// function diss() {
//   console.log("You are not cool :(");
// }

// function repeatThreeTimes(greet);

// const myFunc = function add(x, y) {
//   return x + y;
// };

// function repeat(num, func) {
//   for (let i = 0; i < num; i++) {
//     func();
//   }
// }

// repeat(5, greet);

// function giveBirth() {
//   console.log("GIVING BIRTH!!");
//   return function cry() {
//     return "wahhhhhhhh";
//   };
// }

// function makeMultiplyFunc(num) {
//   return function mult(x) {
//     return num * x;
//   };
// }

// const quad = makeMultiplyFunc(4);

// greet();
// setTimeout(function () {
//   diss();
//   diss();
//   diss();
// }, 3000);
// greet();

// const id = setInterval(diss, 2000);

// setTimeout(function () {
//   console.log("Meow");
//   console.log("woof");
//   console.log("oink");
// }, 3000);

// function doTwice(func) {
//   func();
//   func();
// }

// doTwice(diss);

const allHs = document.querySelectorAll("h2");

for (let i = 0; i < allHs.length; i++) {
  allHs[i].style.color = "red";
}
// for (let allH of allHs) {
//   allHs.style.color = "red";
// }

const allH2s = document.getElementsByTagName("h2");

for (let h2 of allH2s) {
  h2.style.color = "purple";
  h2.style.fontSize = "80";
}
