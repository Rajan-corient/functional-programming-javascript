var num = 25;

// function as a variable (function expression)
var func = function () {
    console.log('Hello world');
}
func();

// function in array
var arr = [1, 2, function() { console.log('Hello from array') }];
console.log(arr[2]());

// function in object
var obj = {
    num: 20,
    string: 'Rajan',
    func: function () {
        console.log('Hello from an object');
    }
}
console.log(obj.func());

// IIFE
console.log( 50 + (function(){ return 30 })());

// passing function as an argument to other function

var addTwo = function(num, fn) {
    console.log(num + fn());
}
console.log(addTwo(2, function(){return 8}));


// function returning function 

var returnFunc = function(){
    return function () {
        console.log('Hello for the last time');
    }
}

returnFunc()();

