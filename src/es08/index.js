const data = {
   frontend: "Eduardo",
   backend: "Yuri",
   design: "Paula",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
   frontend: "Eduardo",
   backend: "Yuri",
   design: "Paula",
};

const values = Object.values(data2);
console.log(values, values.length);

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "-"));

const obj = {
   name: "Eduardo",
};

// Working with Promise + Async + Await:
const helloWorld = () => {
   return new Promise((resolve, reject) => {
      true
         ? setTimeout(() => resolve("Hello world"), 3000)
         : reject(new Error("Test Error"));
   });
};

const helloAsync = async () => {
   const hello = await helloWorld();
   console.log(hello);
};

helloAsync();

// Right way to work with Async - Use try/catch
const anotherFunction = async () => {
   try {
      const hello = await helloWorld();
      console.log(hello);
   } catch {
      console.log(error);
   }
};

anotherFunction();