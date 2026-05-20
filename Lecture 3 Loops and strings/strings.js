// // Ways of storing strings / variables
// let name = "Hassan"
// let name2 = 'Hassan'
// let name3 = `Hassan`


// // chrAt
// let chrAt = name.charAt(4)
// // SLICE
// let namespace = `  Hassan             `
// let slice = `Hassan`
// slice = slice.slice(2,5) // cuts out a piece 
// //REPLACE
// let replace = name.replace(name[3] , "😂")
// // CONCATE
// let concat = name3.concat(name)
// // TRIM UPPER LOWER CASE
// namespace = namespace.trim(); // removes whitespace
// name3 = name3.toUpperCase();
// // let namexyz = name.toUpperCase()
// let namexyz = name.toLowerCase();

// let obj = {
//     item : "pen",
//     cost : 10
// }

// console.log("cost of", obj.item, "is", obj.cost ,"rupees")
// console.log(`cost of ${obj.item} is ${obj.cost} rupees`)
// console.log("This is \n para") // next line
// console.log("This is \t para") // tab space
// console.log(name3);
// console.log(namexyz);
// console.log(namespace);
// console.log(slice);
// console.log(concat);
// console.log(replace);
// console.log(chrAt);

let username = prompt("Enter your full Name: ")
// username = username.trim();
let length = username.length
// let final = username.concat(length)
console.log(`@${username}${username.length}`)
// console.log("@" + final)