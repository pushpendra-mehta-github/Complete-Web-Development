const sum = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const g = 9.8;
const PI = 3.14;

// let obj = {
//   sum:sum,
//   sub:sub,
//   mul:mul,
//   g:g,
//   PI: PI,  };

//  module.exports = obj;

/* output  --> sum = 21
sub = 19
g = 9.8

PI = 3.14  */


// Some Other to Exports -

 module.exports = {
       sum:sum,
       sub:sub,
       mul:mul,
       g:g,
       PI: PI,    
    };