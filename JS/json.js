let person = {name:"Husrev",age:18};
let person1 = {"name":"Husrev","age":18};
let arr = [1,2,3,4,5,6,7,8,9,10]


//stringfy => object to string, parse => string to object


console.log(typeof person,person);
let jsonStringPerson = JSON.stringify(person);
console.log(typeof jsonStringPerson, jsonStringPerson);
let stringToObjectPerson = JSON.parse(jsonStringPerson);
console.log(stringToObjectPerson);
stringToObjectPerson.age = 25;
let stringToObjectPerson2 = JSON.parse('{"nme":"Mert","age":35}');
console.log(stringToObjectPerson2);
/*
let stringToObjectPerson3 = JSON.parse("{\"name\"\"Mert\",\"age\":35}");
console.log(stringToObjectPerson3);
*/


console.log(JSON.stringify("selam"+15))
console.log(person,stringToObjectPerson);

console.log(arr, JSON.stringify(arr));


///LocalStorage
localStorage.setItem('a',25);
localStorage.setItem('b',JSON.stringify({age:15}));

let localItem = localStorage.getItem('a');
let localItem1 = localStorage.getItem('b');

console.log(typeof localItem);
console.log(typeof localItem1,localItem1);
console.log(JSON.parse(localItem1));

//localStorage.removeItem('a');
//console.log(localStorage.length);
//localStorage.clear();



const url = 'https://open.er-api.com/v6/latest/USD';

fetch(url)//get request,post/ delete put
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.rates);
    // Now you can work with the JSON data returned from the API
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

