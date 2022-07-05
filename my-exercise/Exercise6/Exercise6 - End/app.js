
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = scores.map(val => (val < 10) ? val * 10 : val);

const rmvOverScores = boostSingleScores.filter(val => val <= 100);

const rmvZeroScores = rmvOverScores.filter(val => val > 0);

const scoresSum = rmvZeroScores.reduce((sum, val) => sum + val, 0);

const scoresCnt = rmvZeroScores.reduce((cnt, val) => cnt + 1, 0);

//1. Convert each statement to a function that can accept and act on any array.

//2. Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.

//3. Compose a function that will do all the modifications to an array. Test it using the scores array.

//4. Create a function that will accept an array and return the average. Use the function that sums scores and the function that counts scores or the length property.

//5. Compose a function that will do all the modifications on an array and return an average.  


// Problem Solutions

//1. Convert each statement to a function that can accept and act on any array.

const boostSingleScoresFn = (arr) => arr.map(val => (val < 10) ? val * 10 : val);

const rmvOverScoresFn = (arr) => arr.filter(val => val <= 100);

const rmvZeroScoresFn = (arr) => arr.filter(val => val > 0);

const scoresSumFn = (arr) => arr.reduce((sum, val) => sum + val, 0);

const scoresCntFn = (arr) => arr.reduce((cnt, val) => cnt + 1, 0);

 

const pipe = function(...fns) {
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    }
};

const compose = function(...fns) {
    return function(x) {
        return fns.reduceRight(function(v, f) {
            return f(v);
        }, x);
    }
};

//2. Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array. 

const getZeroAndOverScore = pipe(rmvOverScoresFn, rmvZeroScoresFn);
console.log('getZeroAndOverScore', getZeroAndOverScore(scores));


//3. Compose a function that will do all the modifications to an array. Test it using the scores array.

// const result3Fn = compose(
//     rmvZeroScoresFn, 
//     rmvOverScoresFn, 
//     boostSingleScoresFn);


// we can also use pipe
const result3Fn = pipe(
    getZeroAndOverScore, 
    boostSingleScoresFn);

console.log('result3Fn', result3Fn(scores));


//4. Create a function that will accept an array and return the average. Use the function that sums scores and the function that counts scores or the length property.

const getAverage = (arr) => {
    return scoresSumFn(arr) / scoresCntFn(arr);
}

//5. Compose a function that will do all the modifications on an array and return an average.  

const result5Fn = compose(
    getAverage, 
    result3Fn);

const avg = result5Fn(scores);    
console.log('avg', avg);


