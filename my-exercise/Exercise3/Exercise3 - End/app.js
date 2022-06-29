
let scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];


// Any scores that are below 10 needs to be multiplied by 10 and the new value included.

const list1 = scores.map(item => {
    return item < 10 ? item * 10 : item;
});
console.log('list1', list1);


// Remove any scores that are over 100.
 
const list2 = scores.filter(item => item <= 100);
console.log('list2', list2);

// Remove any scores that are 0 or below.

const list3 = list2.filter(item => item > 0);
console.log('list3', list3);

// Sum the scores.

const sum = list3.reduce((acc, curr) => {
    return acc + curr;
}, 0)
console.log('sum', sum)

// Provide a count for the number of scores still remaining.

console.log('count', list3.length);

// alternative
const scoresCnt = list3.reduce(function(cnt, val) {
    return cnt + 1;
}, 0);

console.log('scoresCnt', scoresCnt);














