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


clock()();






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

console.log(`p1: ${p1.age} \np1Copy: ${p1Copy.age} \np1Copy2: ${p1Copy2.age}`);
  
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
