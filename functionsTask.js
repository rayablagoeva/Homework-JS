
// TASK: define object 'calc', with next properties and values:
// 'add' - a function, which returns the sum of 2 numbers
// 'sub' - a function, which returns the subtraction of 2 numbers
// 'mult' - a function, which returns the multiplication of 2 numbers
// 'div' - a function, which returns the division of 2 numbers

// ---> YOUR CODE HERE <---
 let calc= {
    "add":  function(x,y){
        let sum = x+y;
        return sum;
},
    "sub": function(x,y){
        let sub= x-y;
        return sub;
} ,

    "mult": function(x,y){
            let mult = x * y;
            return mult;
},
    "div": function (x,y){
        let div = x / y;
        return div
}
 }


// TEST:
let x = 5, y = 5;
console.log(calc.add(x, y)); // 9
console.log(calc.sub(x, y)); // 3
console.log(calc.mult(x, y)); // 18
console.log(calc.div(x, y)); // 2


