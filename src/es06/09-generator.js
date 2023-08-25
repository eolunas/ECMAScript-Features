function* iterate(array) {
   for(let value of array){
      yield value;
   }
}

const it = iterate(['Eduardo', 'Yuri','Ana','Julian','Mario']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);