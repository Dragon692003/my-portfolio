// String
let studentName = "Mohamed Fazil";

// Number
let age = 23;

// Boolean
let isIntern = true;

// Undefined
let email;

// Null
let phoneNumber = null;

console.log(studentName);
console.log(age);
console.log(isIntern);
console.log(email);
console.log(phoneNumber);


const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", function () {
    message.textContent = "Welcome to my portfolio!";
});