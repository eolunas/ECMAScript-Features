// replace all
const string =
   "JavaScript is wonderful, with JavaScript I could create the future of the web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// Private methods #
class Message {
   #show(value) {
      console.log(value);
   }
}

const message = new Message();
message.show("Hello");

// Promise any [Return the first value which is completed]
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
Promise.any([promise1, promise2, promise3]).then((response) =>
   console.log(response)
);

// WeakRef - avoid that element will be recolected by garbage collector
class AnyClass {
   constructor(element) {
      this.ref = new WeakRef(element);
   }
}

{
   let isTrue = true;
   let isFalse = false;
   console.log((isTrue &&= isFalse));
}

{
   let isTrue = true;
   let isFalse = false;
   console.log((isTrue ||= isFalse));
}
{
   let isTrue = undefined;
   let isFalse = false;
   console.log((isTrue ??= isFalse));
}
