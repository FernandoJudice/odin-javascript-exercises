const palindromes = function (word) {

    cleanWord = word.replace(/[^\w]/gi,'').toLowerCase();
    return cleanWord === cleanWord.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
