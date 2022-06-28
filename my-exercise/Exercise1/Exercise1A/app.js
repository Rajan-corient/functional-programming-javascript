var users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 }
];

// issue with this approach is here we are passing users as a reference 
// and it gets changed from both the function newScore() and newTries()

var newScore = function (arr, name, amt) {
    arr.forEach(element => {
        if (element.name.toLowerCase() == name.toLowerCase()) {
            element.score = element.score + amt;
        }
    });
    return arr;
}

var newTries = function (arr, name) {
    arr.forEach(element => {
        if (element.name.toLowerCase() == name.toLowerCase()) {
            element.tries++;
        }
    });
    return arr;
}

var newArr1 = newScore(users, 'Henry', 50);
var newArr2 = newTries(users, 'Henry');