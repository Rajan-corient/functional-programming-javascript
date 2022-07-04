var str = 'Innovation distinguishes between a leader and follower.';

// with procdure (procedure is a function with multiple task, statement and shared state)

var prepareString = function () {
    let str1 = str.trim();
    let str2 = str1.replace(/[?.,!]/g, '');
    let str3 = str2.toUpperCase();
    let arr = str3.split(' ');

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === 'A' || element === 'AN' || element === 'THE') {
            arr.splice(i, 1);
        }
    }
    return arr;
}
prepareString();

// with function in functional programming

function trimStr(strr) {
    return str.trim();
}

function removeSpecialChar(strr) {
    return strr.replace(/[?.,!]/g, '');
}

function makeUpperCase(strr) {
    return strr.toUpperCase();
}

function makeArr(strr) {
    return strr.split(' ')
}

function noArticles(strr) {
    return (strr !== 'A' && strr !== 'AN' && strr !== 'THE') ;
}

function filterArticles(arr) {
    return arr.filter(noArticles);
}

const finalArr = filterArticles(makeArr(makeUpperCase(removeSpecialChar(trimStr(str)))));
console.log('finalArr', finalArr);

let s1 = trimStr(str);
let s2 = removeSpecialChar(s1);
let s3 = makeUpperCase(s2);
let s4 = makeArr(s3);
let finalArr1 = filterArticles(s4);

console.log('finalArr1', finalArr1);
