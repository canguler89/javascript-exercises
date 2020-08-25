// // 0/0 is NaN
// // 1 + NaN
// // 1 / 0
// // infinity

// // ...............
// // Variables

let name = "Can";
let lastName = "Guler";

let fullName = name + " " + lastName;

document.getElementById("container").innerText = fullName;

// // ...............

// var x = 2;

// {
//   var x = 5;
//   console.log(x);
// }
// console.log(x);

// // output 5 x2;

// // ...............

// let y = 3;

// {
//   let y = 8;
//   console.log(y);
// }
// console.log(y);
// // output first 8 in a scope; then 3 out of scope..

// const z = 5;
// {
//   const z = 11;
//   console.log(z);
// }
// console.log(z);
// output 5  once since const z in a block cannot be executed.

// Function Scope

// function lol() {
//   let person = "Can";
//   const age = 31;
//   var bodyType = "Athletic";
// }
// // output  ... is not defined.

// function color() {
//   let color = "purple";
//   const age = 19;
//   console.log(age);
// }
// color();
// lol();

// let bird = "hummingbird";

// function birdType() {
//   let bird = "parrot";
//   console.log(bird);
// }
// console.log(bird);
// birdType();
// output  humming first and then parrot

// if (true) {
//   var animal = "eel";
//   console.log(animal);
// }
// console.log(animal);
// output works both way since there is no blocks for var variables

// let animals = ["bear", "panda", "monkey", "cat", "dog"];
// for (let i = 0; i < animals.length; i++) {
//   document.getElementById("list-items").innerText += animals[i] + "</br>";
// }

// var slides = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];
// var str = "<ul>";

// slides.forEach(function (slide) {
//   str += "<li>" + slide + "</li>";
// });
// str += "</ul>";
// document.getElementById("container").innerHTML = str;

// two functions inner and outer. having access to outer fucntions

const square = function (num) {
  return num * num;
};

document.getElementById("math").innerHTML = square(9);

//  const product = function multiply(x,y) {
//      return x  *  y;
//  }
//  console.log(multiply(5,6))
//  output is not defined since we stored information in product variable as an object.
// FUNCTIONS ARE OBJECTS...

function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}
const divide = function (x, y) {
  return x / y;
};

const operations = [add, subtract, multiply, divide, square];

document.getElementById("add").innerHTML = operations[0](200, 5);
document.getElementById("sub").innerHTML = operations[1](200, 5);
document.getElementById("mul").innerHTML = operations[2](200, 5);
document.getElementById("div").innerHTML = operations[3](200, 5);
