const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("rites-hc-com")

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "   saurabh  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://shivi.com/shivi%20dubey"


//console.log(url.replace('%20', '-'))


//console.log(url.includes('shivi'))

console.log(gameName.split('-'))