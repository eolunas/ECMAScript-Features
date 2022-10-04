var lastname = 'Eduardo';
lastname = 'Oscar';
console.log(lastname);

let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
   if(true){
      var fruit1 = 'Apple';    //Function scope
      let fruit2 = 'Kiwi';     //Block scope
      const fruit3 = 'Banana'; //Block scope
   }
   console.log(fruit1);
   console.log(fruit2);
   console.log(fruit13);
}

fruits();