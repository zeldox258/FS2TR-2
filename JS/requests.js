// https://jsonplaceholder.typicode.com/posts
let names;
fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(data => {
    console.log(data)
    names = data.map(person => person.name);

    console.log(names);
    //store all the names from that apis in local storage with key 'names'
    localStorage.setItem('names',JSON.stringify(names));

    let parsedNames = JSON.parse(localStorage.getItem('names'));
    console.log(parsedNames);
})
 .catch(e=>{console.log(e)});

/*
fetch https://jsonplaceholder.typicode.com/users
then get all the ages.
store them in local storage with keys 'ages'
get 'ages' from local storage and parse
increase all the ages by 5
then print parsed ages and first ages array.

*/
 
//Suleyman

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data)
    ages = data.map(person => person.id);

    console.log(ages);
    localStorage.setItem('ages',JSON.stringify(ages));

    let increasedAges = JSON.parse(localStorage.getItem('ages'));

    increasedAges = increasedAges.map(age => age+5);

    console.log(ages);
    console.log(increasedAges);
})