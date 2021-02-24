/*
ES5 Function that takes a variable number of arguments
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
*/

//ES2015 Function for the above function

function filterOutOdds(...nums){
    return nums.filter(num => num%2 === 0)
}
//console.log(filterOutOdds(1, 2, 4, 5, 6,7, 9, 10));

/*
findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/

function findMin(...args){
    return Math.min(...args);
}
console.log(findMin(1, 3, 5, 7, 9));
console.log(findMin(1,4,12,-3));
console.log(findMin(1,-1));
console.log(findMin(3,1));

/*
mergeObjects
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys 
and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

*/
function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));