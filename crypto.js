const Crypto = require("crypto-js");
const env =  require ("dotenv");

env.config();

const my_password = "demo1";
//const my_key = "lovemelovemycat"
const my_key = process.env.SeCRET_KEY;

// encode
const password = crypto.encrypt(my_password, my_key,);
console.log('password',password.toString());

// decode
const data = crypto.AES.decrypt(password.toString(),my_key);
console.log('data', data.toString(crypto.enc.Utf8));
