
let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---

function getHighestScoreIndex(students,scores){

    let highesElement =0;
    let highestScoreIndex;
        for (let i = 0; i < scores.length; i++) {
            if(scores[i] > highesElement){
                highesElement =scores[i];
                highestScoreIndex = i;

            }
        }
        return highestScoreIndex;
}

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

let highestScoreIndex = getHighestScoreIndex(students,scores);
console.log(`${students[highestScoreIndex]} has the higest score: ${scores[highestScoreIndex]}`);

// ---> YOUR CODE HERE <---

// expected output
// Maria has the higest score: 6
