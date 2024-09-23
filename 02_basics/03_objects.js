//singleton
//Object.create


//objects literals

const mySym = Symbol("key1")

const jsUser = {
    name:"hitesh",
    "full name":"hitesh tiwari",

    [mySym]: "myKey1",
    age: 20,
    location: "Satna",
    email: "hitesh123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satuarday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// jsUser.email = "namanchatgpt@gmail.com" // chnage the value in object

// console.log(jsUser.email);

// //Object.freeze(jsUser) // freez the object which we cannot change 

// jsUser.email = "ruchi240@gmai.com"
//console.log(jsUser)

// //functions
jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ,${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());