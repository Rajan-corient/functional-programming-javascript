

console.log(funcDeclaration);
funcDeclaration();

// function declaration
// function expression get hoisted to top

function funcDeclaration () {
    console.log('I am function declaration');
}

// function expression
// function expression doesn't get hoisted to top

console.log(funcExpression);
funcExpression();

var funcExpression = function () {
    console.log('I am function expression')
}

// hoisting of variables

// variable with var keyword get hoisted
console.log('printing variable with var keyword', firstName);

var firstName = 'Rajan';


// variable with let keyword doesn't get hoisted
console.log('printing variable with let keyword', lastName);

let lastName = 'Gupta';


// variable with const keyword doesn't get hoisted
console.log('printing variable with const keyword', age);

const age = 27;