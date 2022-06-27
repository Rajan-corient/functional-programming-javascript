console.log("Functional Programming");

var currentUser = 0;
var users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 }
];

// Imperative or non-functional approach

// var updateScore = function(newAmt) {
//     users[currentUser].score += newAmt;
// }

// var returnUsers = function() {
//     return users;
// }

// var updateTries = function() {
//     users[currentUser].tries++;
// }

// var updateUser = function(newUser) {
//     currentUser = newUser;
// }

// updateUser(1);
// updateScore(50);
// updateTries();
// console.log(returnUsers());


// Declarative or functional approach
// in this approach we wil not use the currentUser variable as it can cause 
// side effects

var usersList = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 }
];

// mutable function
function getRecordData (arr, prop) {
    usersList.forEach(function(val, i, a) {
        if (val.name.toLowerCase() === arr[0].toLowerCase()) {
            a[i][prop] = arr[1];
        }
    });
}

// Pure Functions
function getScore (arr, name) {
    var score;
    for (let i = 0; i < arr.length; i++) {
        if (name.toLowerCase() == arr[i].name.toLowerCase()) {
            score = arr[i].score;
            break;
        }
    }
    return [name, score];
}

function getTries (arr, name) {
    var tries;
    for (let i = 0; i < arr.length; i++) {
        if (name.toLowerCase() == arr[i].name.toLowerCase()) {
            tries = arr[i].tries;
            break;
        }
    }
    return [name, tries];
}

var updateScore = function(arr, amt) {
    var newAmt = arr[1] + amt;
    return [arr[0], newAmt];
}

var updateTries = function(arr) {
    var newTries = arr[1] + 1;
    return [arr[0], newTries];
}

var scoreArr = getScore(usersList, 'Mary');
var newScore = updateScore(scoreArr, 90);
getRecordData(newScore, "score");

getRecordData(updateTries(getTries(usersList, 'Mary')), 'tries');





