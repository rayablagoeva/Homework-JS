var fruitsData = [
	["apple", "orange", "cherry"],
	[1.2, 2.0, 3.5],
];

// TASK: log in console using fruitsData and for loop:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5

// the non-efective (stupid) way:
// console.log( fruitsData[0][0] +'='+ fruitsData[1][0]);
// console.log( fruitsData[0][1] +'='+ fruitsData[1][1]);
// console.log( fruitsData[0][2] +'='+ fruitsData[1][2]);


// the cleaver way:
// >>>>>>>>>>>> your code here >>>>>>>>>>>>
for(let i =0; i<1; i++){
    for(let j=0; j< fruitsData[i].length; j++){
        console.log(`${fruitsData[i][j]} = ${fruitsData[i+1][j]}`);
    }
}
//HINT: you have to loop over columns