// arrays

const myArr = [0, 14, 21, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);
console.log(myArr2[1]);

myArr.push(6) //adds an element
myArr.push(7)
myArr.pop() // removes last elelment
//myArr.unshift(9) // add element on the first
//myArr.shift() //Removes the first element from an array and returns it. 
//If the array is empty, undefined is returned and the array is not modified.

console.log(myArr)

// console.log(myArr.includes(9)) // return true if element include in array

// console.log(myArr.indexOf(9)) // return index if note found then return -1

// const newArr = myArr.join(); // join the array and converted it into string
// console.log(myArr);

// console.log(newArr);


//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // return the section of array include 1 but not 3 it does not manipulate the orignal array


console.log(myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1, 3)// in this it include the range and it manupulate the orignal array

console.log("C", myArr)
console.log(myn2)

