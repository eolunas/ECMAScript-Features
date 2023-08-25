
/* findLast()traverses an array from the end and retrieves the value of the first element that satisfies the condition. undefined is returned if no element matches the condition.*/
const arr = [10, 23, 13, 43, 29];
const lowerThanThirty = arr.findLast((ele) => ele < 30);
console.log(lowerThanThirty); // expected output: 29

/*In contrast, findLastIndex() returns the index of the first element that satisfies the condition. If the condition is not satisfied, -1 is returned.*/
const lowerThanThirtyI = arr.findLastIndex(ele => ele < 30)
console.log(lowerThanThirtyI); // expected output: 4