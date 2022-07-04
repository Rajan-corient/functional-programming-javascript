let list = [1, 2, 3, 4, 5];

// forEach is an example of hider order function 
// as it take callBack as an argument
list.forEach(function (item, index) {
    console.log(item);
})

// taking function as an argument
var addNumber = function (num1, getNo) {
    return num1 + getNo();
};
console.log(addNumber(5, function(){ return 10 }));


// return function from a function
// innner function has access to scope of outer function i.e num1 (closure)
var multiply = function (num1) {
    return function (num2) {
        return num1 * num2;
    };
};

let func1 = multiply(5);
let func2 = func1(100);
console.log(func2);


