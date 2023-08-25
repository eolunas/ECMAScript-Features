// Before es6
function newFunction(name, age, country) {
   var name = name || "Eduardo";
   var age = age || 28;
   var country = country || "COL";
   console.log(name, age, country);
}

// es6:  JUNE 2015
function newFunction2(name = "Eduardo", age = 28, country = "COL") {
   console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "32", "COL");

// Before es6
let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6:
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Before es6
let lorem = "una frase epica \n" + "otra frase epica";

// es6
let lorem2 = `nueva frase epica
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

// Before es6
let person = {
   name: "Eduardo",
   age: 28,
   country: "COL",
};
console.log(person.name, person.age);
// es6
let { name, age, country } = person;
console.log(name, age, country);

// Spread operator es6
let team1 = ["Eduardo", "Yuri", "Marco"];
let team2 = ["Maria", "Juan", "Camilo"];

let education = ["David", ...team1, ...team2];
console.log(education);

// Let instead of var [Just available in block where was created]
{
   var globalVar = "Global var";
}
{
   let globalLet = "Global let";
   console.log(globalLet);
}
console.log(globalVar);
// console.log(globalLet);

// Add const for unmodifible variables
const a = "b";
a = "a";

// creating objects faster
let nameE = "Eduardo";
let ageE = 28;

obj = { name: nameE, age: ageE }; //es5
obj2 = { nameE, ageE }; //es6

console.log(obj, obj2);

// Arrow functions
const names = [
   { name: "Eduardo", age: 28 },
   { name: "Yuri", age: 28 },
];

let listOfNames = names.map(function (item) {
   console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));
const listOfNames3 = (name, age, country) => {
   //Code
};
const listOfNames4 = (name) => {
   //Code
};
const square = (num) => num * num;

// Promises [Solve callbackhel]
const helloPromise = () => {
   return new Promise((resolve, reject) => {
      if (false) {
         resolve("Hey!");
      } else {
         reject("Ups!!");
      }
   });
};

helloPromise()
   .then((response) => console.log(response))
   .catch((error) => console.log(error));

// Class and Object
class calculator {
   constructor() {
      this.valueA = 0;
      this.valueB = 0;
   }
   sum (valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
   }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// Import external modules:
const hello = require('./module.js');
console.log(hello());

// Generator function
function* helloWorld() {
   if(true) {
      yield 'Hello, ';
   }
   if (true) {
      yield 'World';
   }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

