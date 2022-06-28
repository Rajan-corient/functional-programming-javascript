"use strict";

// Shallow copying objects and array

let obj = {
    name: 'Amit',
    age: 27,
    salary: 50000,
    country: 'india'
}

// It is not clonning the object, it copies object by their reference
// and changes made to copied object will also be reflected to original object

let copyObj = obj;
copyObj.age = 30;

console.log('obj', obj);
console.log('copyObj', copyObj);

// shallow copying using Object.assign() method

let user = {
    firstName: 'Rajan',
    LastName: 'Gupta',
    age: 27
}

let userCopy = Object.assign({}, user);

userCopy.firstName = 'Aakash';

console.log('user', user);
console.log('userCopy', userCopy);


let user2 = {
    firstName: 'Rajan',
    LastName: 'Gupta',
    age: 27,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
    },
}

let user2Copy = Object.assign({}, user2);

user2Copy.address.city = 'Pune';

// Object.assign() creats shallow copy, it won't be able to restrict
// changes to original object when changes are made to nested object of copied object

console.log('user2', user2);
console.log('user2Copy', user2Copy);

// shallow copying array

const userArr = [
    { id: 1, name: 'Rajan' },
    { id: 2, name: 'Amit' },
    { id: 3, name: 'Suraj' }
]

let copyUserArr = Object.assign([], userArr);

userArr[0].name = 'Sumit';

console.log('userArr', userArr);
console.log('copyUserArr', copyUserArr);

// shallow copying using ...spread operator

const numList = [5, 6, 9, 10, 12, 3, 4];
const copyNumList = [...numList];

copyNumList.push(10);

console.log('numList', numList);
console.log('copyNumList', copyNumList);


let empObj = {
    id: 1,
    firstName: 'bob',
    lastName: 'zen',
    age: 30,
    address: {
        city: 'texas',
        country: 'US'
    }
}

let copyEmpObj = {...empObj};

empObj.age = 45;
empObj.address.city = 'New York';

console.log('empObj', empObj);
console.log('copyEmpObj', copyEmpObj);


// deep copying Object

// deep copying using Json.stringify() and json.parse()

let userObj = {
    firstName: 'Sky',
    LastName: 'Singh',
    age: 27,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
    },
}

let copyUserObj = JSON.parse(JSON.stringify(userObj));

copyUserObj.address.city = 'Thane';

console.log('userObj', userObj);
console.log('copyUserObj', copyUserObj);

// deep copying array

const userList = [
    { id: 1, name: 'Rajan' },
    { id: 2, name: 'Amit' },
    { id: 3, name: 'Suraj' }
]

const copyUserList = JSON.parse(JSON.stringify(userList));

userList[0].name = 'Anil';

console.log('userList', userList);
console.log('copyUserList', copyUserList);


// deep cloning function

const arr = [3,4,2,5,1,6];

const deepClone = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};

const sortedArr = deepClone(arr).sort();

console.log('arr', arr);
console.log('sortedArr', sortedArr);



