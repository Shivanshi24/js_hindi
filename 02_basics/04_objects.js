//const tinderUser = new Object() // singleton object

const tinderUser = {}  //non singleton
tinderUser.id = "123Abc"
tinderUser.name = "pradeep"
tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "hitesh",
            lastName: "chaudhari"
        }
    }
}

//console.log(regularUser.fullName.userfullname.firstName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2) 


//const obj3 = Object.assign({}, obj1, obj2) //{} optional parameter  as target parameter

const obj3 = { ...obj1, ...obj2 } //spread operator

//console.log(obj3)

const user =[
    {
        id:1,
        email:"pradeep@gmail.com"
    },
    {
       
    },
    {
       
    },
]
//  user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) //returns in key values

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //return boolean if it has a value 



//*********************************destructure the object ********************************** */

const course ={
    coursename:"js in hindi",
    price :"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

const {courseInstructor : instructor} = course
console.log(instructor)

// const nav = ({company}) => {

// }

// nav(company = "hitesh")

// {

          // "name": "hitesh"
//          "coursename": "js in hindi",
//          "price" : "free",
//          
//      }
     [
         {},
      {},
       {}
    ]