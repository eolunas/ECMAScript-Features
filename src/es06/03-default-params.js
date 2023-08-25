function newUser(name, age, country) {
   var name = name || "Eduardo";
   var age = age || 29;
   var country = country || "COL";
   console.log(name, age, country);
}

newUser();
newUser("Yuri", 28, "COl");

function newAdmin(name = "Eduardo", age = 29, country = "COL") {
   console.log(name, age, country);
}
newAdmin();
newAdmin("Yuri", 28, "COl");