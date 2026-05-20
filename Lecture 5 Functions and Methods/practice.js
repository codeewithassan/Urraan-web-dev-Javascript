// TASK 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNum = arr.filter((num)=>{
    return num % 2 !== 0
})
// console.log(oddNum)
let oddSum = oddNum.reduce((prevVal, CurrVal)=>{
    return prevVal + CurrVal
})
console.log(`sum of odd numbers = ${oddSum}`)

// TASK 2
let cars = prompt("Enter your fav cars")
let carsArr = cars.split(",");
let final = carsArr.map((car)=>{
    return car.toUpperCase()
})
console.log(final)

let numbers = [5, 10, 15, 20];
let Doubled = numbers.map((num)=>{
   return num * 2
})
console.log("Doubled array = "+ Doubled)
console.log("Original array = "+ numbers)