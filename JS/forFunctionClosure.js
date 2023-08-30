
/* Write function that will take an array like [{name:"Husrev", age:18},{name:"mert",age:25}] 
at the end of function. your function needs to check all the members one by one and print to console.

Husrev is not bigger than 20
Mert is bigger than 20


*/



/* Mert */

function checkAges (people){
    for (let i = 0; i<people.length; i++ ) {
        if(people[i].age > 20){
            console.log(`${people[i].name} is bigger than 20`)

        }
        else{
            console.log(`${people[i].name} is not bigger than 20`)
        }
    }
}




let arr = [{name:"Husrev", age:18,gender:"Male"},{name:"mert",age:25,gender:"Male"},{name:"Suleyman",age:28,gender:"Male"},{name:"Emre",age:20,gender:"Male"},{name:"Doriana",age:23,gender:"Female"}];

checkAges(arr);


/* if age is bigger than 18, you also needs to write desired salary, desired salary =(age * 250)  */

/*
Husrev is not bigger than 18
Mert is bigger than 18 he can legally work, his desired salary is $6250 
*/

/* Mert */

function checkWorkStatus (people){
    for (let i = 0; i<people.length; i++ ) {
        if(people[i].age > 18){
            console.log(`${people[i].name} is bigger than 18 he can legally work, ${people[i].gender == "Male" ? "his" : "her"  } desired salary is ${people[i].age * 250}`)

        }
        else{
            console.log(`${people[i].name} is not bigger than 18`)
        }
    }
}

checkWorkStatus(arr);



/* Convert these two function to arrow function */

/* Suleyman */


const arrowCheckWorkStatus = (people) => {
    for (let i = 0; i<people.length; i++ ) {
        if(people[i].age > 18){
            console.log(`${people[i].name} is bigger than 18 he can legally work, ${people[i].gender == "Male" ? "his" : "her"  } desired salary is ${people[i].age * 250}`)

        }
        else{
            console.log(`${people[i].name} is not bigger than 18`)
        }
    }
}

const arrowCheckAges = (people) => {
    for (let i = 0; i<people.length; i++ ) {
        if(people[i].age > 20){
            console.log(`${people[i].name} is bigger than 20`)

        }
        else{
            console.log(`${people[i].name} is not bigger than 20`)
        }
    }
}


/* Delete if Statements and convert them to ternary */
/* Husrev */


const arrowCheckAgesH = (people) => {
    let result = [];
    for (let i = 0; i<people.length; i++ ) {
        let newValue =  people[i].age > 20 ?  `${people[i].name} is bigger than 20` : `${people[i].name} is not bigger than 20`;
        result.push(newValue);
    }
    console.log(result);
}

arrowCheckAgesH(arr);

/* let number =  Condition ? true : false */


const arrowCheckAgesC = (people) => {
    for (let i = 0; i<people.length; i++ ) {
        people[i].age > 20 ?  console.log(`${people[i].name} is bigger than 20`) : console.log(`${people[i].name} is not bigger than 20`);
    }
}

arrowCheckAgesC(arr);




/* Closures */


function prinMyName(name){

    function inner(){
        console.log(name);
    }

    return inner();
}

function prinMyName2(){

    let name = "Mert";

    function inner(){
        console.log(name);
    }

    return inner;
}

function prinMyName3(){


    function inner(name){
        console.log(name);
    }

    return inner;
}

prinMyName("Husrev");
prinMyName2()();
prinMyName3()("Emre");




/* write a clock function for us, it will only store minutes and seconds. when ever we run the clock function clock should start */



/* Emre */
function clock(){


    function inner(){
        let sec = 0;
        let min = 0;
        setInterval(()=>{
            sec++;
            if(sec===60){
                min++;
                sec = 0;
            }

            console.log(`Minutes: ${min} Seconds: ${sec}`);

        },1000)
    }

    return inner;
}


//clock()();






/*


copy this object to another object and change the age of new object and print both objects.


// Create a deep copy of person1 using Object.assign()
const person2 = Object.assign({}, person1);

*/
//Husrev ==>

let p1 = {
    name:"ali",
    age:55,
    weight:100
}

const p1Copy = {
  ...p1,
  age: 25,
}

const p1Copy2 = Object.assign({}, p1);
p1Copy2.age = 22;

console.log(p1, p1Copy, p1Copy2);
  
// <== Husrev 

let p2 = {
    name:"ali",
    age:55,
    weight:100
}
//Mert
let p3 = {
    name:"ali",
    age:55,
    weight:100
}
let p18 = { ...p3}
p18.age = 40;
console.log("Main object p3:", p3)
console.log("Copy object p18:", p18)

//Suleyman
let p4 = {
    name:"mehmet",
    age:55,
    weight:100
}

let p4Copy = Object.assign({}, p4);
p4Copy.age = 28;
console.log(p4);
console.log(p4Copy);



//Emre
let p5 = {
    name:"ali",
    age:55,
    weight:100
}
let p5copy = {...p5};
p5copy.age = 58;
console.log("/////////////")
console.log(p5);
console.log(p5copy);



let car = {
    name:"BMW",
    year:1985,
    model:"BMW i7"
}


console.log(Object.keys(car));
console.log(Object.values(car));

console.log(car.name);
console.log(car[Object.keys(car)[2]]);//most used
console.log(car[0]);//undefined


const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

if(!order?.customer?.address?.city){
    console.log('City is required');
}


const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];

//age bigger than 18


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

//persons.filter()

const biggerThan = persons.filter((person) => person.age > 18);
console.log(biggerThan);

const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 35 }
];

// Create a new array with names of people
const names = people.map(person => person.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

//Paul-21
//George-17
const newArray = persons.map( person => person.name +" - " + person.age)
console.log(newArray)


//
const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
const averageAge = totalAge / persons.length;

console.log(totalAge, averageAge)


const notes = [
    {
      id: 1,
      description: "Workout program",
      todos: [
        {
          id: 1,
          name: "Push ups - 10 x 3",
          done: false,
        },
        {
          id: 2,
          name: "Abdominals - 20 x 3",
          done: true,
        },
        {
          id: 3,
          name: "Tapis Roulant - 15min",
          done: true,
        },
      ],
    },
    {
      id: 2,
      description: "Front-end Roadmap",
      todos: [
        {
          id: 1,
          name: "Learn HTML",
          done: true,
        },
        {
          id: 2,
          name: "Learn CSS",
          done: true,
        },
        {
          id: 3,
          name: "Learn JavaScript",
          done: true,
        },
        {
          id: 4,
          name: "Learn Angular",
          done: false,
        },
      ],
    },
  ];

 

  let NewArr = notes.map((task)=>{
    task.todos = task.todos.filter((todo) => !todo.done)
    return task;
  });

  console.log(JSON.stringify(NewArr));



  let newArr2 = persons.sort((a,b)=> b.age - a.age);

  console.log(newArr2);



  /*
  
  Write a function called printAsyncName, which takes a callback and a string(which will be name) as parameters. DONE
  The callback function will simply print "Hello". DONE
  The printAsyncName function will have to execute the callback function after an interval of 1 second. DONE
  After an interval of 2 seconds, we must print the name that we take as a parameter. DONE
  
  */


  function printHello(){
    console.log("Hello");
  }

  function printAsyncName(callBack, str){

    setInterval(()=>{
        callBack();
        setTimeout(()=>{
            console.log(str);
        },2000)
    
    },1000)

  }

  ///printAsyncName(printHello,"Suleyman");


  /*
  
  Write a function called repeatHello which takes a callback as it's parameter. 
  The callback function will simply print "Hello". 
  The repeatHello function will have to execute the callback function with an interval of 1 second. 
  The callback function must be an arrow function.

  */
 function repeatHello  (callBack) {
    
    setInterval(()=>{
        callBack();
    },1000)
 }

 repeatHello(()=>{console.log("Hello")});