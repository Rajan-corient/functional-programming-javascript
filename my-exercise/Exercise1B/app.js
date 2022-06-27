var users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 }
];

// mutable functions 

function storeUser (userArr, user) {
    userArr.forEach(element => {
        if (element.name.toLowerCase() == user.name.toLowerCase()) {
            element = user;
        }
    })
}

// pure functions

function getUser(arr, name) {
    for (element of arr) {
        if (element.name.toLowerCase() == name.toLowerCase()) {
            return element; 
        }
    };
    return null;
}

function updateScore(user, amt) {
    if (user) {
        user.score += amt;
        return user;
    }
}

function updateTries(user) {
    if (user) {
        user.tries += 1;
        return user;
    }
}

var user1 = getUser(users, 'Henry');
var user2 = updateScore(user1, 50);
var user3 = updateTries(user2);
storeUser(users, user3);