const Crypto = require("crypto-js");

const my_password = "demo";
const my_key = "lovemelovemycat"

// encode
const password = crypto.encrypt(my_password, my_key,);
console.log('password',password.toString());

// encode
