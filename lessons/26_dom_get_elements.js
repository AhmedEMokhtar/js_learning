// dom
// vars
document.getElementById("title").style.cssText = `color:red`;
// there's are many ways to get element in js

// 1 -  by id
let x = document.getElementById("title"); //return one element
console.log(x);

// 2 - by className
console.log("=".repeat(30));

let y = document.getElementsByClassName("title"); // return list of elements
console.log(y);

// //  3- by tag name
console.log("=".repeat(30));

let z = document.getElementsByTagName("title"); // return list of elements
console.log(y);

// //  4- by query selector
console.log("=".repeat(30));

let xx = document.querySelector(".title"); // return 1th element
console.log(xx);

// //  4- by query selector  all

console.log("=".repeat(30));

let xy = document.querySelectorAll("#title"); // return element
console.log(xy);
