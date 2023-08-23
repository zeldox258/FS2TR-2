class Person {
    static peopleNum = 0;
    #name; 
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this._age = age;

        //increase peopleNum
        Person.peopleNum++;
    }

    /*getAge(){
        return this.age;
    }

    setAge(age){
        this.age = age;
    }*/

    // Getter for age
    get age() {
        if(this._age < 15)
            return this._age;
        else
            return "You dont have right to see";
    }

    // Setter for age
    set age(newAge) {
        if (newAge >= 0 && newAge <= 120) { // Assuming a reasonable age range
            this._age = newAge;
        } else {
            console.log("Invalid age value");
        }
    }

    printMyName(){
        console.log(`My name is ${this.name} ${this.surname} and I am ${this.age} years old.`)
    }

    static printPeopleNumber(){
        console.log("Number Of People : " + Person.peopleNum);
    }
    
}

console.log(Person);

let husrev = new Person("Husrev","Lale",18);
let suleyman = new Person("Suleyman","Kucuksoylemez",28);


console.log(husrev);

console.log(husrev.age)
husrev.printMyName();
suleyman.printMyName();



class Worker extends Person{
    constructor(name, surname, age, workerId){
        super(name, surname, age);

        this.workerId = workerId;

    }

    printMyName(){
        console.log(`My name is ${this.name} ${this.surname} and I am ${this.age} years old. My WorkerID:${this.workerId}`);
    }

}
let omer = new Worker("omer","Guray",23,15);
console.log(Worker);
console.log(omer);
omer.printMyName();

class ultraWorker extends Worker{
    constructor(name, surname, age, workerId, specialID){
        
        super(name, surname, age, workerId);
        this.name = "deneme"
        this.specialID = specialID;

    }
}

let Emre = new ultraWorker("Emre","Doner",23,15,12);
console.log(ultraWorker);
console.log(Emre);
Emre.printMyName();



//instanceof
console.log(omer instanceof ultraWorker)//false
console.log(omer instanceof Worker)//true
console.log(omer instanceof Person)//true

Person.printPeopleNumber();
console.log(Person.peopleNum)


console.log(omer._age);
console.log(omer.name);