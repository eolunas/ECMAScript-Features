//Enahced object literals
function newUser(user, age, country, uId){
   return{
      user,
      age,
      country,
      id: uId
   }
}

console.log(newUser('eolunas', 28, 'COL',1));