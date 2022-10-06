//Just use # for set a function as private
class User {
   //Contructor
   constructor(name, age){
      this.name = name;
      this.age = age;
   }
   //Methods
   greeting() {
      return `${this.speak()} ${this.name}`;
   }
   #speak(){
      return 'Hello';
   }
   //Setter and getters
   get #uAge(){
      return this.age;
   }
   set #uAge(n){
      this.age = n;
   }
};

