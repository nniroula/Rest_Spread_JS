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
    return nums.filter(num => num % 2 === 0)
}
console.log(filterOutOdds(1, 2, 4, 5, 6,7, 9, 10));

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

/*
doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function 
should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/

function doubleAndReturnArgs(arr, ...args){
    let arr3 = [];
    for(let i = 0; i<args.length; i++){
        args[i] = args[i]*2;
        arr3.push(args[i]);
    }
    return [...arr, ...arr3];
}
console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2],10,4));


/*
Slice and Dice!
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let counter = Math.floor(items.length*(Math.random()));
    return [...items.slice(0, counter), ...items.slice(counter+1)];
}
console.log(removeRandom([1, 2, 3, 4]));

//Now this in an arrow function is as follows:
const removeRandomArrow = (items) => {
    let counter = Math.floor(items.length*(Math.random()));
    return [...items.slice(0, counter), ...items.slice(counter+1)];
}
console.log(removeRandomArrow([1, 2]));

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}
console.log(extend([1,2], [3, 4]));

// Now, this in an arrow function is as follows:
const extendArrow = (array1, array2) =>{
    return [...array1, ...array2];
}
console.log(extendArrow([1,2], [3]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    obj[key] = val;
    return {...obj};
}
let obj7 = {name: "Nabin", school: "Springboard"};
console.log(addKeyVal({...obj7, job: "Software Engineerinng std"}));

//Now this in arrow function

const addKeyValArrow = (obj, key, val) => {
    obj[key] = val;
    return {...obj};
}
let obj6 = {name: "Nabin", school: "Springboard"};
console.log(addKeyValArrow({...obj6, job: "Software Engineerinng std"}));


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    //copy the original object into a new one and use it to remove a key 
    let obj2 = {...obj};
    delete obj2[key];
    //console.log({...obj2});
    return obj2;
}
// Now this in arrow function
const removeKeyArrow = (obj, key) => {
    let obj2 = {...obj};
    delete obj2[key];
    return obj2;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}
let obj1 = {name: "Nabin"};
let obj2 = {school: "Springboard"};
console.log(combine({...obj1, ...obj2}));

// Now combine function as an arrow function
const combineArrow = (obj1, obj2) => {
    return {...obj1, ...obj2};
}
let obj3 = {name: "Nabin"};
let obj4 = {school: "Springboard"};
console.log(combine({...obj3, ...obj4}));


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
     // let's add the key val pair to obj as a form of modification
     // make a copy of object so that it does not alter the original object
     let obj1 = {...obj}
    obj1[key] = val;
    return obj1;
}
// As an arrow function
const updateArrow = (obj, key, val) => {
    let obj2 = {...obj};
    obj2[key] = val;
    return obj2;
}


