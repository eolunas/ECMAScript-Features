//Don't abuse using optional chaining, just use when there is a high probability that data doesn't exist!!
//othersiwe you would make debugging process more complicated when errors would occur
const users = {
   eolunas: {
      country: 'CO'
   },
   ypochag: {
      country: 'CO'
   }
}

console.log(users.eolunas.country);
console.log(users.eolunas.age);       //non-existing property
console.log(users?.bebeloper?.country); //non-existing data optional chaining
console.log(users.bebeloper.country); //non-existing data error