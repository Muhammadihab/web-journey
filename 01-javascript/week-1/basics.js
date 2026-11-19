// console.log("hi");
// console.log(`i am learning javascript`);

// window.alert(`This is an alert`);
// window.alert(`I like pizza`);

//This is a comment

/*
This is a comment
*/
// const fname = `Muhammad`;
// const age = `25`;
// document.getElementById("h1").textContent = fname;
// document.getElementById("h2").textContent = age;
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(0 == false);
// console.log(0 === false);
// console.log(age + 5);
// console.log(typeof 5);
// function add(a, b) {
//     return a + b;
// }
// console.log(add(Number(age), 5));
// function safeAdd(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "error";
//     }
//     if (Number.isNaN(a) || Number.isNaN(b)) {
//         return "errorNaN";
//     }
//     return a + b;
// }
// console.log(safeAdd(3, 4));
// console.log(safeAdd(3, "4"));
// console.log(safeAdd(3, NaN));
// const username = prompt(`Enter your name`);
// const username;
// document.getElementById("submit").onclick = function () {
//     username = document.getElementById("mytext").value;
//     console.log(username);
//     document.getElementById("h1").textContent = `hello ${username}`;
// }
// const count = 0;
// const number = document.getElementById("num");
// const increase = document.getElementById("increaseBtn");
// increase.onclick = function () {
//     count++;

//     number.textContent = count;
// }
// const decrease = document.getElementById("decreaseBtn");
// decrease.onclick = function () {
//     count--;

//     number.textContent = count;

// }
// const reset = document.getElementById("resetBtn");

// reset.onclick = function () {
//     count = 0;

//     number.textContent = count;

// }
// const min = 50;
// const max = 100;

// const label = document.getElementById("label");
// const text = document.getElementById("text");
// label.textContent = `guess a number between ${min} and ${max}`;
// const guessBtn = document.getElementById("guessBtn");

// const number = Math.floor(Math.random() * (max - min + 1)) + min;

// guessBtn.onclick = function () {
//     const num = document.getElementById("num").value;
//     const answer = Number(num);
//     if (Number.isNaN(answer) || typeof answer !== "number") {
//         text.textContent = "enter a valid number";
//     }
//     else {
//         if (answer > max || answer < min) {
//             text.textContent = `enter a number in the range`;
//         }
//         else {
//             if (answer < number) {
//                 text.textContent = `higher`;
//             }
//             else if (answer > number) {
//                 text.textContent = `lower`;
//             }
//             else {
//                 text.textContent = `corrrrrrect you've entered the right number`
//             }
//         }

//     }
// }


// function greet(name = `Guest`) {
//     console.log(name);
//     return "Hi " + name;
// }

// console.log(greet());
// const textBox = document.getElementById("theTemp");
// const isfehrinheit = document.getElementById("toFehrinheit");
// const isCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("text");
// function convert() {
//     let temp;

//     if (isfehrinheit.checked) {
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = "The temp is " + temp + "°F";
//     }
//     else if (isCelsius.checked) {
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5 / 9);
//         result.textContent = "The temp is " + temp + "°c";
//     }
//     else {
//         result.textContent = "select an option";

//     }
// }
// let numOfDice = document.getElementById("numOfDice");
// const rollBtn = document.getElementById("rollBtn");
// const diceImages = document.getElementById("images");
// let images = [];
// let numbers = [];


// function roll() {
//     let num = numOfDice.value;
//     for (let i = 0; i < num; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;

//         numbers.push(value);
//         images.push(`<img src="dice/${value}.png">`)
//     }
//     console.log(numbers);

//     diceImages.innerHTML = images.join('')
//     images = [];
//     numbers = [];
// }
