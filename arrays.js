// Задача1:
let numbers = [-2, 3, 7, 8, -1, 4, 2];
let sum=0;
for (let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] >0 && !(numbers[i]%2)){
           
        sum+=numbers[i];
              
    }
}
console.log(sum);
//....................................
//Задача2:
// const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
// let evenNums = [];
// let oddNums = [];

// for (let index = 0; index < numbersArr.length; index++) {
//     if( (numbersArr[index] < 0)  && (numbersArr[index]%2 !== 0)){
//         oddNums.push(numbersArr[index]);
//      }else if ((numbersArr[index] > 0)  && (numbersArr[index]%2 === 0)){
//          evenNums.push(numbersArr[index]);
//      }
// }

// console.log(`Array evenNums ${evenNums}`);
// console.log(`Array oddNums ${oddNums}`);