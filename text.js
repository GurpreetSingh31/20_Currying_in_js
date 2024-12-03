// this is the example of clouser and currying in javascript

const { log } = require("console");


//way-1
function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        console.log(a + b + c + d);
      };
    };
  };
}
const first = add(1);
const second = first(2);
const third = second(3);
third(4)



//way-2 (syntactical sugar)
const add1 = (a)=>(b)=>(c)=> a+b+c
console.log(add(1)(2)(3))

