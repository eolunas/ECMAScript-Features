/* Some methods on Array.prototype, like reverse(), sort() and `splice()`, change the original array. The Change Array by Copy proposal introduces new methods that do not change the original array but return a new one with the changes. These methods are toReversed(), toSorted(), toSpliced() and with(). This proposal makes it easier to work with arrays without mutating them in place.*/

const original = [10, 2, 3, 4, 5];

const reversed = original.toReversed();
const sorted = original.toSorted();
const spliced = original.toSpliced(1, 0, 10, 10);
const withThirty = original.with(2, 30);

console.log({ original, reversed, sorted, spliced, spliced, withThirty });

/* The output will look something similar to this: */

let out = {
  original: [10, 2, 3, 4, 5],
  reversed: [5, 4, 3, 2, 1],
  sorted: [2, 3, 4, 5, 10],
  spliced: [10, 10, 10, 2, 3, 4, 5],
  withThirty: [10, 2, 30, 4, 5],
};

/*All of these methods maintain the original state of the target array and return a copy of it with the applied changes, making them mutable. */