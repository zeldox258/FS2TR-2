let checkNumber = (num) =>{
    return new Promise((resolve, reject) =>{
        if(num > 20){
            resolve("You are older than 20");
        }
        else{
            reject(new Error("You are not older than 20"));
        }
    })
}

let checkNumberIsEven = (num) =>{
    return new Promise((resolve, reject) =>{
        if(num % 2 == 0){
            resolve("Your age is Even congrats..");
        }
        else{
            reject(new Error("Your age is not even come back one year later"));
        }
    })
}


try{

}
catch(e){
    console.log(e);
}

checkNumber(25)
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Ended Promise");
})




let number = 5;


checkNumber(number)
.then((message)=>{
    console.log(message);
    return checkNumberIsEven(number);
})
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Ended Promise");
})
console.log("///////////")

/*

first promise checks if the grade is bigger than 50
second promise checks the grade and gives letter grade

*/

//Mert

let checkGrade = (num) =>{
    return new Promise((resolve, reject) =>{
        if(num > 50){
            resolve("Congrats you passed the class");
        }
        else{
            reject(new Error("Faillure"));
        }
    })
}

let grader = (num) =>{
    return new Promise((resolve, reject) =>{
        if(num > 100){
            reject(new Error("Not a correct grade"))
        }
        
        else if(num > 70){
            resolve("Your grade is AA");//100> reject 70> Aa
        }
        
        else{
            resolve("Your grade is BB");
        }
    })
}

checkGrade(number)
.then((message)=>{
    console.log(message);
    return grader(number);
})
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Ended Promise");
})