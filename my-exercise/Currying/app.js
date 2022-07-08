const multiply = function (x, y) {
    return x * y;
}
let res1 = multiply(4, 5)
console.log('res1', res1);

// Currying example by bind method
// Currying replaces a function that requires multiple argumnts
// with a multiple function which requires only one argument

const multiplyByTwo = multiply.bind(this, 2);
let res2 = multiplyByTwo(5);
console.log('res2', res2);


const multiplyByThree = multiply.bind(this, 3);
let res3 = multiplyByThree(5);
console.log('res3', res3);

// here we are passing two parameters in bind method so 
// it will be taken as arguments and passing 5 in multiply2 will be ignored
const multiply2 = multiply.bind(this, 3, 4);
let res4 = multiply2(5);
console.log('res4', res4);

// currying example inner function (closure)

// without currying (arity 2 as function has two parameters )

function greet(greet, name) {
    console.log(greet +' '+ name);
}

// Here we have greet repeated and that can be avoided using currying
greet('Welcome', 'Rajan');
greet('Welcome', 'Amit');
greet('Welcome', 'Vishal');

function greet2(greet) {
    return function (name) {
        console.log(greet +' '+ name);
    }
}

// Arity 1 asonly one parameter
const welcomeGreet = greet2('Welcome');
welcomeGreet('Aakash');
welcomeGreet('Suraj');

const multiply3 = function (x) {
    return function (y) {
        return x * y;
    }
}

let res5 = multiply3(5)(10);
console.log('res5', res5);


let multiplyByFive = multiply3(5);
console.log('res6', multiplyByFive(6));

let multiplyByTen = multiply3(10);
console.log('res7', multiplyByTen(6));

// without currying 

function sumWithoutCurrying(a, b , c, d) {
    return a + b + c + d;
}

const sumRes = sumWithoutCurrying(5, 10, 15, 20);
console.log('sumWithoutCurrying', sumRes);


// with currying 
function sumWithCurrying(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            }
        }
    }
}

const sumRes2 = sumWithCurrying(5)(10)(15)(20);
console.log('sumWithCurrying', sumRes2);

const sumWithCurryingArrowFn = (a) => (b) => (c) => (d) => a + b + c + d;
// const sumWithCurryingArrowFn = a => b => c => d => a + b + c + d;

const sumRes3 = sumWithCurryingArrowFn(5)(10)(15)(20);
console.log('sumWithCurryingArrowFn', sumRes3);

// Infinite currying example

const add = function (a) {
    return function (b) {
        if (b) {
            return add(a+b);
        }
        return a;
    }
}

const addRes = add(5)(10)();
const addRes1 = add(5)(10)(15)();
const addRes2 = add(5)(10)(15)(20)();
const addRes3 = add(5)(10)(15)(20)(25)();

console.log('addRes', addRes);
console.log('addRes1', addRes1);
console.log('addRes2', addRes2);
console.log('addRes3', addRes3);

