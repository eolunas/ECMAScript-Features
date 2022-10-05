try {
   hello();
} catch (error) {
   console.log(error);
}

try {
   hello2();
} catch (error) {
   console.log(error);
   console.log('Error defined by user');
}