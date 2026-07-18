const reverseString = function(str) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
        out = str[i] + out;
    }
    return out;
};

// Do not edit below this line
module.exports = reverseString;
