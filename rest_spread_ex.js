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