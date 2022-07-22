
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = scores.map(val => (val < 10) ? val * 10 : val);

const rmvOverScores = boostSingleScores.filter(val => val <= 100);

const rmvZeroScores = rmvOverScores.filter(val => val > 0);


// Solution

//Convert each statement to a function that can accept and act on any array.
const boostSingleScores1 = _.map(val => (val < 10) ? val * 10 : val);

const rmvOverScores1 = _.filter(val => val <= 100);

const rmvZeroScores1 = _.filter(val => val > 0);

// Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.

const lowerAndOverScore = _.pipe(
    rmvOverScores1,
    rmvZeroScores1
)
lowerAndOverScore(scores);

//Compose a function that will do all the modifications to an array. Test it using the scores array.

const processScores = _.pipe(
    boostSingleScores1,
    lowerAndOverScore
)
processScores(scores);

//Create a function that will accept an array and return the average.
//Compose a function that will do all the modifications on an array and return an average.

const scoreSumFn = _.reduce((sum, val) => sum + val)(0);
const scoreCntFn = _.reduce((cnt, val) => cnt + 1)(0);

const computeAverage = (arr) => {
    return scoreSumFn(arr) / scoreCntFn(arr);
}

const logAndReturn = (arr) => {
    console.log(arr);
    return arr;
}

const getAvg = _.pipe(
    processScores,
    logAndReturn,
    computeAverage
)
getAvg(scores);
 