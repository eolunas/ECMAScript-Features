const user = { username: "eolunas", age: 29, country: "CO" };
const {username, ...values} = user;
console.log(username);
console.log(values);
