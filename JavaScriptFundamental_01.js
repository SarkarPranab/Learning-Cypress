console.log("Hello world");
// Single line comment
/**
 * Multiline comment
 *
 */
//variable declaration
var a = 4;
//from es6 two more let and const
let v = 5;
console.log(v);
//check datatype
console.log(typeof v);
let d = 123.5;
console.log(typeof d);
var c = "Pranab Sarkar";
console.log(typeof c);
let required = true;
console.log(typeof required);
var c = a + d;
console.log(c);
// We cannot redeclare variable with let keyword but possible with var
c = v + d; //reassigning is allowed with let // var c=a+b (this is also allowed.)
console.log(c);
console.log(!required);

// loops and condition in javascript
const flag = true;
if (flag) {
  console.log("Condition True");
} else {
  console.log("Condition false");
}
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

// do {
//   i++;
// } while (i > 10);

console.log(i);

for (let k = 0; k <= 10; k++) {
  console.log(k);
}

// Array

// let marks = Array(6);
// var marks = new Array(20, 40, 35, 12, 37);

var marks = [20, 40, 35, 12, 37];
SubMarks = marks.slice(2, 5);
console.log(SubMarks);
console.log(marks[2]);
marks[3] = 14;
console.log(marks);
console.log(marks.length);
marks.push(95);
console.log(marks);
marks.pop();
console.log(marks);
marks.unshift(12);
console.log(marks);
console.log(marks.indexOf(37));
// present in array or not
console.log(marks.includes(120));
marks.slice(2, 5);

var sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
console.log(sum);
// reduce filter map
let total = marks.reduce((sum, marks) => sum + marks, 0);
console.log(total);

// create new array with even numbers of scores array [12,14,16]
var evenScores = [];
var scores = [12, 13, 14, 16];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);
  }
}
console.log(evenScores);
// filter example
let newFilterEvenScore = scores.filter((score) => score % 2 == 0);
console.log(newFilterEvenScore);

// multiply all element of above array with 3 (using map)
let mappedarray = newFilterEvenScore.map((score) => score * 3);
console.log(mappedarray);
let totalVal = mappedarray.reduce((sum, val) => sum + val, 0);
console.log(totalVal);

// single line operation
var scores1 = [12, 13, 14, 16];
var sumValue = scores1
  .filter((score) => score % 2 == 0)
  .map((score) => score * 3)
  .reduce((sum, value) => sum + value, 0);
console.log(sumValue);
let fruits = ["banana", "mango", "apple", "watermilon"];
fruits.sort();
console.log(fruits);
console.log(fruits.reverse());
var scores1 = [12, 13, 9, 45, 6];
console.log(scores1.sort());
console.log(scores1.sort((a, b) => a - b));

//Functions
function add(a, b) {
  return a + b;
}

let sum2 = add(2, 3);
console.log(sum2);

// function don't have name we call them annoymas function
let sumOfIntegers = function (c, d) {
  return c + d;
};

let sumOfNumbers = (c, d) => c + d;
console.log(sumOfNumbers(2, 3));

//difference between var , let and const
// var : global / function scope - can be redeclared
// let : global / block scope - cannot be redeclared
// const : same as liet - cannot be re initialized

//String
let day = "Tuesday";
// String length
console.log(day.length);
console.log(day.slice(0, 5));
console.log(day[1]);
let splitDay = day.split("s");
console.log(splitDay);

// String to interger
let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);
// convert to string
console.log(diff.toString());

// concat string
let newQoute = day + " is Friday day";
console.log(newQoute);
let val = newQoute.indexOf("day", 5);
console.log(val);
// Tuesday is Funday
let count = 0;
let val2 = newQoute.indexOf("day");
while (val2 !== -1) {
  count++;
  val2 = newQoute.indexOf("day", val2 + 1);
}
console.log(count);

// JavaScript Objects : Collections of properties
let person = {
  firstName: "Kim",
  lastname: "Kurdisian",
  age: 24,
  fullname: function () {
    console.log(this.firstName + this.lastname);
  },
};
console.log(person.firstName);
console.log(person["lastname"]);

// lets change the property
person.firstName = "Dani Daniels";
console.log(person.firstName);

// lets add new property
person.gender = "female";
console.log(person);

// delete property from object
delete person.gender;
console.log(person);

// chcek if property present in gender or not
console.log("gender" in person);

// iterate through all key in property in object
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

// calling function in object prop
console.log(person.fullname());

// Classes from es6
class Person {
  age = 25; // class variable
  get location() {
    return "canada";
  }
  // constructor is a method which executes by default when you create object the class
  constructor(firstName, lastname) {
    // Instance variable
    this.firstName = firstName;
    this.lastname = lastname;
  }

  fullName() {
    console.log(this.firstName + this.lastname);
  }
}
let person2 = new Person("Stromy", "Daniels");
console.log(person2.age);
console.log(person2.location);
console.log(person2.fullName());

//Export class
module.exports = class Person

//import class
// const person = require("./Person")

// Inheritance in JS
class A{
  name = "adams";
}
class B extends A{
  // console.log(name);
}