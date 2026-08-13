// const name = "ade";
// // console.log(name)
// document.getElementById("demo").innerHTML= "hello ade";

// const BigNum = 30
// const SmallNum = 4

// if(SmallNum > BigNum){
//     console.log("bigger")
// }else if(SmallNum === 4){
//     console.log("smaller")
// }else{
//     console.log("nothing")
// }

// // else(
// //     console.log("false")
// // )

// console.log("hello world")
// console.log("Hello!");
// console.log(100);
// console.log(true);
// console.log("My name is Ada");

// const age = 90;

// age = 100

// console.log(age);


// const age = 50
// var city = "lagos"
// const name = "prada"
// const num = 10

// if (num % 3 === 0){
//     console.log("Even Number")
// }else{
//     console.log("Odd number")
// }

// else if(age > 20){
//     console.log("older")
// }

// let x = 8;
// let y = 10

// console.log(x != y)

// if(!x){
//     console.log("5 is great")
// }

// let name = "";

// name === "ade" ? console.log("Ade is the name") : console.log("uhmmm")

// switch("ade"){
//     case "ade": 
//     name = "ade"
//     console.log("Ade is the Name")
//     break

//     case "kola":
//     name = "kola"
//     break

//     case "bisi": 
//     name ="bisi"

// }

// function myApp() {
//     // return 
//     console.log("hello world")
// }

// // const run =
//  myApp();
// // console.log(run)




// function multiply(a, b, c){
//    return  a * b + c
// }

// // let ade = "sola"; ade = "bola"; console.log(ade)


// console.log(multiply(2, 3, 4));
// console.log(multiply(40, 50, 60))

// function cars(){
//     let carName = "volvo"
// console.log(carName)

// }


// cars();

// function shoeBrand(shoe) {
//     return shoe;
// }


// let shoe = shoeBrand("Adidas");

// console.log(`My shoe drip is ${shoe}`)

// const test = () => console.log("hello world")

// test();


// let name = `Sadde
// is my 
// best friend  `

// ;
// const subject = new String("Maths")
// console.log(name.charAt(1))
// let text = "We are the so-called \b \"Vikings\" from the north.";
// console.log(text)

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char)

// const rando = Math.floor(Math.random() * 10);
// console.log(rando)


const cars = ["volvo", "honda", "opel"]

// console.log(cars[0].toString())
// console.log(JSON.stringify(cars))

// console.log(typeof(cars))

// const data = [
//     {firstName: "Adeoluwa", LastName: "Funke", age: 32},
//     {firstName: "Wole", LastName: "Jade", age: 21}
//  ]

// console.log(`${data[1].firstName} ${data[1].LastName} ${data[1].age}`)

// let rando = [];

// rando[0] = Date.now();

// console.log(data[data.length - 1 ])

// console.log(data[1])

const fruit = ["mango", "orange", "apple"]

// console.log(fruit.at(2))

// console.log(fruit[2] = "banana")

// console.log(fruit.join("&"))

fruit.push("kiwi")

// console.log(fruit.pop())

// fruit.shift()

fruit.unshift("banana")


fruit[fruit.length] = "lemon,"

// delete fruit[3]
// console.log(fruit)

// const student = ["sola", "bola", "tola"]


// console.log(fruit + student)
// const likefruit = new Array(fruit + student)



// console.log(likefruit.join('/'))


// const sub = [1, 2, 3, 4]

// sub.flat()

// console.log(sub.flatMap(x => [ x * 10]))

// sub.splice(4, 0, 5, 6 )


// console.log(sub.slice(0, 4))

// console.log(sub)


// const student = ["sola", "bola", "tola"]


// console.log(student.includes("tola") )


// const sub = [1, 2, 3, 4, 6]

//  const findNumber = sub.findIndex(checkSub);

// function checkSub(value){
//     return value > 5
// }

// console.log(findNumber)

// console.log(student.sort());

// console.log(student.reverse());

// const sortStu = student.toSorted();

// console.log(sortStu)
// console.log(student)

// const points = [40, 100, 1, 5, 25, 10];
// const sortNum = points.toSorted(function(a, b){return a - b});


// const reversedNum = sortNum.toReversed()
// console.log(reversedNum)

//JS LOOP

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// const student = ["sola", "bola", "tola"]

// for(let p = 0; p < userList.length; p++){
//     console.log(`Showing Student with ID - ${p + 1} - ${student[p]}`)
// }

// for(let stu of student){
//     console.log(stu)
// }

// const prices = [500, 1200, 800, 3000];

// for (let price of prices) {
//   console.log("Price: ₦" + price);
// }

// let counts = 1

// while(counts <= 10){
//     console.log(counts)
//     counts++
// }

// let lotto = 3

// while(lotto > 0){
//     console.log("you lose bet attempt" + lotto)
//     lotto--
// }

// console.log("try again another time")


// let count = 1;

// do {
//   console.log(count);
//   count++;
// } while (count);


// const data = [{id: 1, name: "sola"}, {id:2, name: "Ade"}, {id:3, name: "Kunle"}]

// data.forEach(function(item){
//     console.log(`${item.id} - ${item.name} `)
// })


// data.forEach((item) => {
//         console.log(`${item.id} - ${item.name} `)
// })

// const fruits = ["mango", "apple", "banana"];

// fruits.forEach((fruit, index) => {
//         console.log(`${index + 1} - ${fruit} `)

// })

const person = {
    name: "ade",
    age: 45,
    city: "Lagos"
}

for(let key in person){
    console.log(`${key} - ${person[key]}`)
    continue;
}


// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// for (let fruit of fruits) {
//   if (fruit === "Banana") {
//     continue; // ← skip this one, go to the next
//   }
//   console.log(fruit);
// }


// const prices = [500, 1200, 800, 3000];
// let total = 0;

// for (let price of prices) {
//   total = total + price;
// }

// console.log("Total: ₦" + total);


fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error =>{
    console.log(error)
  })