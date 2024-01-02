// type annotation is nothing but we give expesitly tipe to the variable
// ex  : let num : number

// let myNumber:number =  10;
// let fullName:String = "Rishi";
// console.log(myNumber.toString)

// let invalidNumber : number  =  5 + "kdfj"

// let invalidString : number  = "sjkd"

// let value : number  = Math.sqrt(2);  true

// let nan : number = NaN;

// String

// let fullname:String =  "Rishi Maheshwari"

// let myname:boolean = true

// const myFunction = (num : number):boolean =>{
//     return (num % 4 === 0 && num % 8 ===0)
// }

// console.log(myFunction(8))

// Any and unknown

// any tipe is most flexible type in typescript and it desable the type

// let myNum:any  = 5
// myNum = "rishi"
// myNum = true

// unknown
// let myNumber : unknown   = 5;
// myNumber = true

// function's

//   function greet(name:string, id:number){ //perameter
//         console.log(`Your name is ${name} and id is ${id}`)
//   }

// greet("rishi", 1) //argument

// const greed  = (name:string, id:number) =>{
//       console.log(`Your name is ${name} and id is ${id}`)
// }
// greed("rishi", 1)

// const greet = (name: string, id : number): string =>{
//       return (`Your name is ${name} and id is ${id}`)

// }

// const ans  =  greet("RISHI", 1);
// console.log(ans)

// type inference in typescript
// let myName = "Rishi"

// default and optional function in TS

// fun define

// const greet  = (name : string, id?  :number):string =>{
//       return `Welcome ${name}, your id is ${id}`
// }
// console.log(greet("user"));

// Arrays In TS
// const numbers:number[] = [1,2,3,4,5,6]

// const numbers1:number[] = new Array(1,2,3,4,5)

// const names:string[] =  Array.of("r", "s","t")

// console.log(names[1].length)

// inbuild method in array
// let fruits:string[] =  new Array("A", "B", "C", "D");
// let updatedFruits =  fruits.push("E");
// console.log(updatedFruits)
// console.log(fruits)

// const lastData = fruits.pop();
// console.log(fruits)

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// for of loop

// for(let c of fruits){
//     console.log(c)
// }

// for each loop
// fruits.forEach((curVal: string) => console.log(curVal))

// map method
// let numbers: number[] = [1,2,3,4,5,6];
// const doubleData:number[] =  numbers.map((curr: number) => curr* 2 )
// console.log(doubleData)

// const convetIntoString:string[] =  numbers.map((num: number) => num.toString())
// console.log(convetIntoString)

// filter mathod

// const evenNumber : number[] =  numbers.filter((curr:number) => curr %2 == 0 )
// console.log(evenNumber)

// objectjs in javascript
// const Person : {
//     name : string;
//     age : number;
//     isStudent : boolean;
//     address : {city: string; country : string}
// } ={
//     name : "Rishi",
//     age : 21,
//     isStudent  : true,
//     address : {
//         city : "Sehore",
//         country : "Indai"
//     }
// }

// console.log(Person.address.city)

// const Product : {
//     name : string; price : number; quantity:number
// } = {
//     name : "Leptop",
//     price : 223,
//     quantity : 2
// }

// console.log(Product)

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; country: string };
// };

// const person: Person = {
//   name: "Rishi",
//   age: 21,
//   isStudent: true,
//   address: {
//     city: "Sehore",
//     country: "Indai",  
//   },
// };



// type aliases 
// type Price = {
//     name : String,
//     prices : number,
//     quantity : number
// }
// const price: Price = {
//     name :" leptop",
//     prices  : 1000,
//     quantity : 3
// }


// const  ans =  (price: Price) =>{
//     return price.prices * price.quantity
// }


// console.log(ans)


// call signature 

// type Student = {
//     name : string,
//     age : number,
//     gender?: string,

// }

// const student1 : Student = {
//     name : "RIshi",
//     age : 21
// }

// const introduction: (student : Student) => void = (student: Student) =>{

// }









// enum ****************************************************************************** 

// enum Role  {
//     user = "user" , admin = "admin"
// }
// type loginDetails = {
//     name ?: string;
//     email : string;
//     password : string;
//     role : Role
// }


// const user1: loginDetails = {
//     email : "rishi@gmail.com",
//     password : "123456",
//     role : Role.admin
// }
// const user2: loginDetails = {
//     email : "user@gmail.com",
//     password : "123456",
//     role : Role.user
// }

// const isAdmin  = (user1 : loginDetails) =>{
//     const {name , role} =  user1;
//    console.log( role === 'admin' ? "Allow" : "Not allowed")
// }

// isAdmin(user1)



// Tuples in TS  *********************************************************************************


// type info = [string , number, boolean]
// const user1 : info = ["rishi", 21, true]


// union  *****************************************************************************
// const inputValue  =  (v : number | string) =>{

// }

// inputValue(5)
// inputValue("Rishi")

// const userInput  =  (value : string |number ): string | number =>{
//     if(typeof value === 'number'){
//         return value * 2;
//     }
//     else if(typeof value === 'string'){
//         return value.toUpperCase();
//     }
//     else{
//         throw new Error("Invalid input")
//     }
// }

// console.log(userInput(2))
// console.log(userInput("rishi"))

// intersection  **************************************************************************

// type Person = {
//     name : string,
//     age : number
// }
// type Employee = {
//     id : string,
//     department : string
// }

// type EmployeeDetails =  Person & Employee;
// const employee : EmployeeDetails  = {
//     name : "Rishi",
//     age : 21,
//     id : "101",
//     department : "full stack"
// }


// generics  ***************************************************************************************

// function test <T>(value : T): T {
//     return value
// }

// console.log(test(2))
// console.log(test(true))
// console.log(test("rishi"))

// function overloding using generics 

// function add<T> (a:T, b:T) {
//     console.log(typeof a)
//     console.log(typeof b)
// }

// const result1  =  add(5,5);
// const result2  =  add("Rishi","Rishi");



// Interface in typescript ******************************************************************

// interface Greet{
//     name : string,
//     age : number
// }

// const greet: Greet = {
//     name : "Rishi",
//     age : 21
// }

// interface Product {
//     name : string,
//     price : number,
//     quantity : number
// }

// const prodect : Product ={
//     name : "Phone",
//     price : 25,
//     quantity : 2
// }

// const calculateTP = (prodect : Product) =>{
//     return prodect.price * prodect.quantity
// }
// console.log(calculateTP(prodect))