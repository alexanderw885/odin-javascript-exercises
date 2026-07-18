const removeFromArray = function(arr, remove) {
    let removeItems = Array.from(arguments).slice(1);
    return arr.filter((x)=> !removeItems.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
