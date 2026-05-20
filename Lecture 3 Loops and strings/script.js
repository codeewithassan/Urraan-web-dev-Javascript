// console.log("Hello world")


// FOR LOOP

// for (let i = 0; i <= 5; i++) {
//     // console.log("Hello world", i)
// }

// let sum = 0
// let n = 5
// for (i = 1; i <= n; i++) {
//     sum = sum + i
// }
// console.log("sum = ", sum)

// console.log("Loop has ended")

// WHILE LOOP

// let i = 1;
// while (i <= 5) {
//     console.log("i = ",i);
//     i++;
// }

// DO WHILE LOOP
// let i = 10
// do {
//     console.log(i)
//     i++
// } while (i <= 5);


// FOR OF LOOP

// let str = "Hassan"
// let length = 0
// for (const me of str) {
//     console.log(me)
//     length++;
// }
// console.log("Length = ", length)

// FOR IN LOOP

// let obj = {
//     name: "Hassan",
//     age: "20",
//     city: "Abbottabad"
// }

// for (const key in obj) {

//     // const element = obj[key];
//     console.log(key, ":", obj[key])

// }
// for (i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
 let gameNum = 20;
 let guessNum = parseInt(prompt("Guess the number"));
//  do {
//     prompt("Your guess num is wrong! please enter again")
//  } while (guessNum!=gameNum);

//  console.log("Congrates! you guessed right num")

 while (guessNum!= gameNum) {
   guessNum = prompt("Your guess num is wrong! please enter again")
 }
  console.log("Congrates! you guessed right num")