let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());
console.log(array.flat(2));

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value *2]));

let hello = '             hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello world          ';
console.log(hello2);
console.log(hello2.trimEnd());

// Optional catch building
try{}catch{
   error
}

// Objects to key value
let entries = [["name", "Eduardo"], ["age", "28"]];
console.log(Object.fromEntries(entries));

// Add description to symbols
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
