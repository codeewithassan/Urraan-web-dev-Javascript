# FUNCTIONS IN JAVASCRIPT :-
## CALLBACK FUNCTIONS 
### any function that is passed as an argument to another 
#### function and is executed inside that outer function to complete a specific action.
#### Instead of waiting for a result, you hand the function to another process and tell it to “call you back” when it’s finished is known as CallBack function.
 ```
 function abc(){
     console.log("Hello")
 }
 function num(abc){
     return abc;
 }
 let number = num(abc);
 number();
 ```

## FOR EACH LOOP IN ARRAYS

## arr.forEach(callBackFunction){}
### CallbackFunction: Here, it is a function to ececute for each element in the array
#### A callback function passed as an argument to another function.

##  FOR EACH LOOP Arguments
### In JavaScript's forEach, the idx (index) parameter works automatically because the forEach method always sends three specific arguments to your callback function behind the scenes.
#### Every time forEach loops through your array, it passes:
```
The current item (val)
The current position/index number (idx)
The entire array itself 
```

## HIGHER ORDER FUNCTION/METHOD:
### A Higher-Order Function is a function that either takes one or more functions as arguments, returns a function as its result, or does both.
#### previous arr.forEach() example is a perfect example of a higher-order function because forEach accepts callback function as an argument.


# SOME MORE ARRAY METHODS :
## MAP() :-
### Creates a new array with the results of some operation. The value its callback returns are used to form a new array.
### arr.map(callbackFnx(value, idx, array))

```
let newArr = arr.map((val)=>{
    return val * 2
})
```
## Filter() :-
### Creates a new array of elements that give true for a condition/filter.
### Eg: all even elements

```
let newArr = arr.filter( (val) => {

    return val % 2 === 0;

})
```

## Reduce() :-
### Performs some operations & reduces the array to a single value. It returns that single value.

```
const nums = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
```
