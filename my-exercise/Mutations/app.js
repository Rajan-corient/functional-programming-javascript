"use strict";

// mutatable obect
const arr = [3,4,2,5,1,6];

const sortArray = function(arr1) {
    return arr1.sort();
};

const newNums = sortArray(arr);

console.log(newNums);
console.log(arr);

const nameArr = ['Rajan', 'Amit', 'Aakash', 'Chintan'];
const copyNameArr = nameArr;

copyNameArr.push('Suraj');

// both array gets updated as copyNameArr gets copy of the reference of nameArr
console.log(nameArr);
console.log(copyNameArr);


// non-mutable objects

const numArr = [8,7,6,5,4,3];

// Object.freeze not allows numArr to be modified
Object.freeze(numArr);

const sortNumArr = function(arr1) {
    return arr1.sort();
};

const sortedNumArr = sortNumArr(numArr);

console.log(nameArr);
console.log(sortedNumArr);