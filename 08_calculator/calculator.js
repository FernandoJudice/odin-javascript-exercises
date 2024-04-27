const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total,x) => total+x,0)
};

const multiply = function(array) {
  return array.reduce((total,x) => total*x,1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(x) {
	let result = 1;
  for (let i=0;i<x;i++){
    result*=(i+1);
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
