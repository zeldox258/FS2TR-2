import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emre from './Winners/Emre'
import Husrev from './Winners/Husrev'
import Ibo from './Winners/Mert'

function App() {
  const [count, setCount] = useState(0)

  /* */
  let isOkay : boolean = true;
  let myAge : number = 23;
  let myName : string = "Mert"
  let myUndef : undefined = undefined;
  let myNull : null = null;
  let mySymbol : symbol = Symbol("Husrev <> Okkes");
  let myArr:number[] = [];
  let myBigInt:BigInt = 100n;

  myArr[8] = 25;
  console.log(myArr);
  console.log(typeof myArr);
  console.log(myArr[9999]);

  console.log(mySymbol);
  console.log(myBigInt);

  let anyValue:any = true

  //Mert add num1 num2
  function Add (num1:number, num2:number ):number {
    return num1 + num2 ;
  }

  function Subs (num1:number, num2:number ):number {
    return num1 - num2 ;
  }


  console.log(Add(25,26));

  
  let myNum2:any = 25;
  
  let myNum3:number = myNum2 as number;

  let myNum4 : any = "25";

  let myNum5:number = myNum4;//error

  console.log(myNum3);


  type tckn = number;

  let myTckn : tckn = 12512332112;

  type person = {
    name:string,
    age:number,
    surname?:string
  }

  type worker = {
    ssn:number
  }


  const Husrev : person = {name:"Husrev" , age:25}

  /*
  
  1 1 1 1 1 1 1 1 1 1 0
  mod10((1,3,5,7,9)*7 - (2,4,6,8))
  */

  let Mert : person & worker = {
    name:"string",
    age:5,
    ssn:5

  }

  interface Person {
    name: string;
    age: number;
  }

  interface Person {
    location: string;
  }

  interface Worker {
    ssn: number;
    isActive: boolean;
  }

  const birisi: Worker & Person = {
    name: 'Abidin',
    age: 54, 
    ssn: 1234235234,
    isActive: false
  }

  console.log(typeof Husrev);
  console.log(typeof myTckn);

  let myDict: Object = {
    "one" : 1,
    "two" : 2,
    "three":3
  }


  console.log(myDict);



  interface MathOperations {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
  }
  
  const calculator: MathOperations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y
  };
  
  
  console.log(calculator.add(25,15));


  class PersonClass {
    public name: string;
    protected age: number;
    private address:string;
  
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    public sayHello() {
        console.log(`Hello, my name is ${this.name}!`);
    }
  
  }
  
  const john2 : PersonClass = new PersonClass("John Doe", 30, "4499 Burke st.");
  john2.sayHello();
  console.log(john2.name);


  class Employee extends PersonClass {
    private employeeId: number;
  
    constructor(name: string, age: number, address: string, employeeId: number) {
        super(name, age, address);
        this.employeeId = employeeId;
    }
  
    public introduce() {
        console.log(`Hello, I am ${this.name}, and my employee ID is ${this.employeeId}. my address is ${this.age}`);
        this.sayHello(); // Accessible because 'sayHello' is protected in the base class
    }
  }
  
  const john = new Employee("John Doe", 30,"4499 Burke st", 1234);
  console.log(john.name);
  john.introduce(); // Accessible


  function identity<T>(arg: T):T{

    console.log(typeof arg);
    return arg;
  }

  console.log(identity<number>(5));


  interface Pair <K,V>{
    key:K;
    value:V;
  }


  const keyValue : Pair<number,string> = {key:15,value:"15"};

  console.log(keyValue);

  const myTuple: [string,number,boolean?] = ["selam",25,true];
  console.log(myTuple);


  enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
  }
  let Direction2:any = {
    Up : 1,
    Down : 2,
    Left : 3,
    Right : 4
  }

  type MyMappedType = {
    [Property in 'prop1' | 'prop2' | 'prop3' ]: number;
  };
  
  let myObject: MyMappedType = {
    prop1: 42,
    prop2: 155,
    prop3:55
  };
  
  
  type MyMappedType2<T> = {
    [K in keyof T]: number;
  };
  
  interface MyObject {
    prop1: string;
    prop2: boolean;
  }
  
  type TransformedObject = MyMappedType2<MyObject>;

  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <Husrev />
        <Ibo />
        <Emre/>
      </div>
    </>
  )
}

export default App
