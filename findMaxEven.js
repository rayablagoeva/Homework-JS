// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

function findMaxEven(numbers){
    let maxEven = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > maxEven && (numbers[i]%2 ===0)){
            maxEven = numbers[i];
        }
        
    }
    return maxEven;
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1,8,4];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);