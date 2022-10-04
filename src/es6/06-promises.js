const anotherFunction = () => {
   return new Promise((resolve, reject) => {
      if(true){
         resolve('It is done');
      }else{
         reject('It is not done');
      }
   }) 
}
anotherFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err));