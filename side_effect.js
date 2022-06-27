var count1 = 1;
var count2 = 1;

// side effects
function increment() {
    count1++;
    return count1;
}
increment();

// pure function
function increment2(params) {
    return params + 1;
}
increment2(count2);

// pure function
function average(list) {
    var total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total / list.length;
}
var avg = average([10, 20, 30, 40]);

// Imperative or non-functional approach
var mainObj = (function (obj) {

    var currentUser = 0;
    var users = [
        { name: "James", score: 30, tries: 1 },
        { name: "Mary", score: 110, tries: 4 },
        { name: "Henry", score: 80, tries: 3 }
    ];

    var updateScore = function (newAmt) {
        users[currentUser].score += newAmt;
    }

    var returnUsers = function () {
        return users;
    }

    var updateTries = function () {
        users[currentUser].tries++;
    }

    var updateUser = function (newUser) {
        currentUser = newUser;
    }

    obj.updateScore = updateScore;
    obj.returnUsers = returnUsers;
    obj.updateTries = updateTries;
    obj.updateUser = updateUser;

    return obj;
})(mainObj || {})

setTimeout(() => {
    mainObj.updateUser(2);
}, 300);

setTimeout(() => {
    mainObj.updateTries();
}, 100);

setTimeout(() => {
    mainObj.updateScore(50);
}, 200);

setTimeout(() => {
    const users = mainObj.returnUsers();
    console.log(users);
}, 300);



