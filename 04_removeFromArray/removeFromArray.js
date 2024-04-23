const removeFromArray = function() {
    let result = arguments[0];
    for (let i=1; i<arguments.length; i++) {
        result = result.filter((x) => x!==arguments[i])
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
