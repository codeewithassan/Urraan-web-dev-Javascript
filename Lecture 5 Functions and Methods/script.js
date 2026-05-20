// FUNCTIONS IN JAVASCRIPT ----------------->>

// function myFunction() {
//     console.log("Hello World!")
//     console.log("Learning JavaScript!")
// }
// // myFunction();
// // myFunction(); // Functions are reusable and can be called anytime to execute the code block

// function myFunction2(msg) { // msg is called parameter
//     // parameter -> input
//     console.log(msg);
// }
// // myFunction2("I love JS") //argument

// // we can give multiple parameters
// function myFunction2(msg, n) { // msg is called parameter
//     // parameter -> input
//     console.log(msg * n); // but this is not vlaide (NaN) we can't evaluate a sting with a number
// }
// // myFunction2("I love JS", 100) //argument

// // Function -> 2 numbers, sum

// function sumFunction(a, b) {
//     // local variables -> Scope
//     console.log(a + b)
// }
// // sumFunction(7,4);

// // OR

// function sumFunction(a, b) {
//     sum = a + b
//     return sum
// }
// // console.log(sumFunction(7,4));

// // OR

// let calculation = sumFunction(9, 6)
// // console.log(calculation)


// Arrow Fuctions:-------->
/* const arrowSum = (x, y) => {
     console.log(x + y)
 };
 // arrowSum = (3, 4);
*/


// let arrowSum2 = (x, y) => {
//     return x * y;
// };
// arrowSum2 = 5; // we can assign a new value to a function

// const printHello = ()=>{ // hum {} hata bhi sakten hn
//     console.log("Hello")
// }
// printHello();


// EXERCISE QUESTION ------------------>
// With simple function:-

/* function countVowels(string) {
    let count = 0;
    for (const alphabet of string) {
        if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u") {
            count++;
        }
    }
    // console.log(count)
    return count;
}
let countedVowels = countVowels(("JavaScript").toLowerCase())
console.log(countedVowels);
*/
// With arrow function:-
/* const countVowels2 = (string2)=>{
     let count2 = 0;
     for (const alphabet2 of string2) {
         if (alphabet2 === "a" || alphabet2 === "e" || alphabet2 === "i" || alphabet2 === "o" || alphabet2 === "u") {
             count2++;
         }
     }
     return count2;
 }
 console.log(countVowels2("hassan"));
*/

// CALLBACK FUNCTIONS in notes--------------->

// FOR EACH LOOP arguments in notes --->

// let arr = [1, 2, 3, 4, 5]
// let arr = ["atd", "lhr", "isb"]

// arr.forEach(function printVal(val){ // value at each index
//     console.log(val)
// })


// we use arrow fuction instead of simple function
/* arr.forEach((val, idx, arr) => { // value at each index | idx means the position of val 
    console.log(val.toUpperCase(), idx, arr)
}) */

/*
FOR EACH LOOP IN ARRAYS in notes 
*/

// HIGHER ORDER FUNCTION/METHOD: in notes

// PRACTICE QUESTION:
let nums = [1, 2, 3, 9, 5, 6, 7, 8];
/*
nums.forEach((val) => {
    console.log(val * val)
})

//  or we can do as

const calculteSquare = (val)=>{
    console.log(val * val)
}
nums.forEach(calculteSquare);
*/ 

// ARRAY METHODS: in notes------>
// MAP :
let newNums = nums.map((val)=>{
    return val * val
})
// console.log(newNums);
// console.log(nums);

// FILTER :
let evenArr = nums.filter((val)=>{
        // return val % 2 === 0 
        // return val % 2 !== 0
        return val > 3
})
// console.log(evenArr)

// REDUCE :

/* const result = nums.reduce((res , curr)=>{
    return res + curr
}) */

// To print the largest number in the array ...
const result = nums.reduce((res , curr)=>{
    return res > curr ? res : curr;
})
// console.log(result);


// PRACTICE QUESTIONS :
// Q#1
let marks = [87, 93, 64, 99, 96, 86];
let greaterMarks = marks.filter((num)=>{
    return num > 90;
})

// console.log(greaterMarks);

// Q#2
let arr = [];
// let totalEntries = parseInt(prompt("Enter your array length :")) // if we want a user to enter his own numbers.
let totalEntries = parseInt(prompt("Enter your array length :"))
// for (let i = 0; i < totalEntries; i++) {
for (let i = 1; i <= totalEntries; i++) {
    arr.push(i)
}
console.log(arr);
// Step 2: Reduce use karke Sum nikalna
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// Step 3: Reduce use karke Product (Factorial) nikalna
let product = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1); // Note: Multiplication ke liye initial value hamesha 1 hoti hai!

console.log(`sum = ${sum}`) 
console.log(`product(factorial) = ${product}`)