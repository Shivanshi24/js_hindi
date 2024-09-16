// primitive data type (value)


// 7 types:
//String, number, boolean, bigInt, undefined, null, symbol 

const score = 23
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')


console.log(id === anotherId)

//const bigNumber = 34536313918372889n



// non- primitive (reference)
// Arrays
// Objects
//Functions

const heros = ["shakti", "ravi", "sagar"]

//objects

let myObj ={
name: "hitesh",
age : 25
}


//functions
const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)
console.log(typeof myObj)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object