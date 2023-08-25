/*Objects and Symbols are unique and can not be recreated in JavaScript. Hence they can be used the WeakMap keys. Weakmaps are Map-like collections that allow only objects as keys.

Previous ECMAScript specifications only allowed objects to be used as WeakMaps, but the new specification will also allow Symbols as WeakMap keys. The proposal adds non-registered Symbols to the list of allowed keys. */

const weakMap = new WeakMap();
const key = Symbol("ref");
weakMap.set(key, "HELLO, ES14!");

console.log(weakMap.get(key));
// Expected output: "HELLO, ES14!"
