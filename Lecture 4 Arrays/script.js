// // const heroes = ["ironman", "Thor", "Hulk", "Spideman", "Antman"];

// // // console.log(heroes);

// // for (let i = 0; i < heroes.length; i++) {
// //   // console.log(heroes[i]);

// // }

// // for (const hero of heroes) {
// //   // console.log(hero); // heros ka ek hero print karwaya.
// // } 

// // for (let hero of heroes){
// //   // console.log(hero.toUpperCase());
// // }

// // // PRWCTICE QUESTION

// // let marks = [85, 97, 44, 37, 76, 60,];
// // let sum = 0
// // for (let i = 0; i < marks.length; i++) {
// //   sum = sum + marks[i]
// // }
// // // console.log(sum)

// // const average = sum/marks.length

// // console.log(average)

// // let amounts = [250, 645, 300, 900, 50];
// // for (let i = 0; i < amounts.length; i++) {
// //   let discount = amounts[i] / 10
// //   amounts[i] = amounts[i] - discount
// // } 
// // console.log(amounts);

// let foodItems = ['potato', 'apple', 'lichi', 'tomato'];
// let foodItems2 = ['a', 'b', 'c', 'd'];
// let arr = [1,2,3,4,5,6,7]
// console.log(foodItems);
// foodItems.pop('tommato', "Pop(Removed) an item at the end");
// console.log(foodItems);
// foodItems.push("push(added) an item at the end");
// console.log(foodItems);
// foodItems.shift('potato', "shift(Removed) an item at the begnning");
// console.log(foodItems);
// foodItems.unshift("unshift(added) an item at the begnning");
// console.log(foodItems);
// console.log(foodItems.toString());

// let concatitems = foodItems.concat(foodItems2);
// console.log(concatitems)
// console.log(foodItems.concat(foodItems2));

// console.log(foodItems2.slice(1,4))

// // arr.splice(2,2, 101, 102)
// // add Element
// arr.splice(2,0, 10)
// // delete element
// arr.splice(2,1)
// // replace element
// arr.splice(2,1,10)
// console.log(arr)

// PRACTICE QUESTION
let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
// companies.shift('Microsoft') OR
// companies.shift(0)
companies.splice(2 ,1 , 'Ola')
companies.push('Amazon')
console.log(companies)