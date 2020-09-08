// Задача: помислете и посочете какво ще се изпише в конзолата, а след това стартирайте скрипта и сравнете вашите отговори:
var a = 1, b = 1;
console.log( a++ + ++a); // 4
console.log( ++b + b++); //4
console.log( a + b); //  3 +3 = 6


var x = 1, y  = 1;
console.log( x++ == ++x); //  1 ==3 false
console.log( ++y == y++); //  2  == 2 true 
console.log(x == y) // 3 ==3 true