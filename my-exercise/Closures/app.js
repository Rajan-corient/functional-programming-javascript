
// closure example -- inner function
// innner function has access to scope of outer function parameters i.e num and num1 
var add = function (num1) {
    var num = 10;
    return function (num2) {
        return num + num1 + num2;
    };
};

let func1 = add(5);
console.dir(func1);
let func2 = func1(15);
console.log(func2);


// closure exmaple in module function
var APP = (function module() {
    var a = 3;

    var print = function (val) {
        console.log(val);
    }    
    
    var sum = function (b) {
        print(a + b);
    }    
    
    var multipy = function (b) {
        print(a * b);
    }

    return {
        sum: sum,
        multipy: multipy
    }
})();

APP.sum(2);
APP.multipy(2);