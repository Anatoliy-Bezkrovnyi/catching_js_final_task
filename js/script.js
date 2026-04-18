'use strict';

const a = 5;
const b = 10;

console.log(a+b);

const username = 'Mango';
const age = 41;
const message = `My name is ${username} and I'm ${age} years old`;

console.log(message);

const productName = 'Repair droid';

console.log(productName.length);


function consolePrint() {
    console.log('Training function called');
}

consolePrint();

function multiply(a, b) {
    console.log(a * b);
}

multiply(4, 5);

function makeMessage(username) {
	console.log(`Hello ${username}`);
}

makeMessage("Jacob");

const grade = 90;

if (grade >= 90) {
    console.log('Perfectly')
} else if (grade >= 80) {
    console.log('Good')
} else if (grade >= 70) {
    console.log('Satisfactorily')
} else {
    console.log('Unsatisfactorily')
}

let type;
const personage = 17;

personage >= 18 ? type = 'adult' : type = 'child';

console.log(type);

const make = 'BYD';

switch (make) {
    case 'Audi':
        console.log('Audi');
        break;
    case 'BMW':
        console.log('BMW');
        break;
    case 'Mercedes':
        console.log('Mercedes');
        break;
    default:
        console.log('Unknown');
        break;
}

let count = 0;

while (count < 10) {
    console.log(count);
    count += 1;
}

let count_1 = 0;

do {
	console.log(`Count: ${count_1}`);
	count_1 += 1;
} while (count_1 < 5);

function greet(name) {
    console.log(`Hello ${name}`);
}

function notify(name) {
    console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerCustomer(name, callback) {
    console.log(`Registering ${name}!`);
    callback(name);
}

registerCustomer('Mango', greet);
registerCustomer('Poly', notify);

const arrayOfNumbers = [1, 2, 3, 4, 5];

const logMessages = (number,index) => console.log(`Index: ${index}, Value: ${number}`);

arrayOfNumbers.forEach(logMessages);