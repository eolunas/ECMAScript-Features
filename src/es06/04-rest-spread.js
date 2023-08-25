//Arrays destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring
let user = { username: "Eduardo", age: 29 };
let { username, age } = user;
console.log(username, user.age);

//Spread operator
let person = {name: 'Eduardo', age: 29};
let country = 'COL';

let data = {id: 1, ...person, country};
console.log(data);

//Rest parameter
function sum(num, ...values) {
   console.log(values);
   console.log(num + values[0]);
   return num + values[0];
}

sum(1,1,2,3);