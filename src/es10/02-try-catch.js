try {
   hello();
} catch (error) {
   console.log(error);
}

try {
   hello2();
} catch {
   console.log('Error defined by user');
}