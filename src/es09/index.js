const obj = {
   name: "Eduardo",
   age: 28,
   country: "COL",
};

let { name, ...all } = obj;
console.log(name, all);

// Easy way to remove one item in a object
let { country, ...all2 } = obj;
console.log(all2);

// Object union
const obja = {
   name: "Eduardo",
   age: 28,
};
const objb = {
   ...obja,
   country: "COL",
};

console.log(objb);


// 
const helloWorld = () => {
   return new Promise((resolve, reject) => {
      true ? setTimeout(() =>  resolve("Hello world"), 3000) 
      : reject(new Error());
   });
};

helloWorld()
   .then((response) => console.log(response))
   .catch((error) => console.log(error))
   .finally(() => console.log('Finalized'));


// Upgrades of group of regex
const regexData = /([0-9]{4})-([0-9]){2}-([0-9]{2})/
const match = regexData.exec('2020-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);