"use strict";

const ps = require("prompt-sync");
const prompt = ps({ sigint: true});

let userName = prompt("Enter your name: ");
console.log("Hello ", userName);

let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");
let sum = parseInt(num1) + parseInt(num2);
console.log("The Result: ", sum);