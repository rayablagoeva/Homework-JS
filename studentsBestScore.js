var students = [
    [
        'Pesho',
        ['math', 5],
        ['physics', 4],
        ['music', 6],
    ],
    [
        'Maria',
        ['math', 6],
        ['physics', 5],
        ['music', 5],
    ],
    [
        'George',
        ['math', 2],
        ['physics', 5],
        ['music', 4],
    ]
];


// Логваме оценките на всеки студент за всеки предмет:
// for(var i = 0; i<students.length; i++){
//     console.log(`${students[i][0]} scores:`);
//     for(var j = 1; j<students[i].length; j++){
//         console.log(`\t${students[i][j][1]} in ${students[i][j][0]}`);
//     }
// }

// TASK: напишете кода, който да намира и изписва в конзолата най-високата оценка и съответния предмет за даден студент.		
// >>>>>>> your code starts here >>>>>>>


for(let i=0; i<students.length; i++){
    let bestScore=2;
    for(let j=1; j<students[i].length; j++){
        if(students[i][j][1] > bestScore){
            bestScore= students[i][j][1];
            subject = students[i][j][0];
        }
        
    }
    console.log(`\t${students[i][0]} is best in  ${subject} (${bestScore})`)
}


// <<<<<<< your code ends here <<<<<<<
// Очакван резултат: 
// Pesho is best in music (6)
// Maria is best in math (6)
// George is best in physics (4)