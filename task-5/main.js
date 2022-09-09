const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let a = result.input;
  let b = a;
  let arr = [];
  while (a > 0) {
    arr.push("*");
    a--;
  }
  while (b > 0) {
    b--;
    console.log(arr.join(""));
  }  
});
