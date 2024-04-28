const fibonacci = function(index) {

    let indexNumber = Number(index);
    if (indexNumber<0) return "OOPS"
    if (indexNumber === 0) return 0
    if (indexNumber <= 2){
        return 1;
    } else {
        return fibonacci(indexNumber-1) + fibonacci(indexNumber-2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
