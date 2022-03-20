const request= require("request");

request("https://srimtnexxplora.pythonanywhere.com/",cb)

function cb(res,err,body){
console.log(res);
console.error("error",err);
console.log(body);
}