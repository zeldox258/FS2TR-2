let func = (x,y)=> {return (x+y)+5}
let func1 = (x,y)=> x+y+5

let a , b, rest;

[]//sira
{}//key pair

[a,b, ...rest] = [5,10,15,20,25,30,35,40];
let a1 , b1, rest1;

[a1,a1, ...rest1] = [5,10,15,20,25,30,35,40];

console.log(a, b, rest);
console.log(a1, b1, rest1);


let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr)

arr = [...arr,11,12,13,14,15]; 
console.log(arr)

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


let c,d,rest2;

//[c, ...rest2, d] = [1,2,3,4,5,6,7,8,9,10];//ERROR



[c=5,d,...rest2] = [6]
console.log(c,d,rest2);


//

const {z,x} = {x:11,z:25,y:15};

console.log(z,x);


const {l,k:{a:j}}={l:15,k:{a:17}}

console.log(l,j);


const{z1, z2, z3, ...z4} = {z1:5,l:15,k:{a:17},z2:7,z3:12,x:11,z:25,y:15,z4:99}

console.log(z1,z2,z3,z4);



let d1,d2,rest5;

[d1,d2, , , , ,...rest5] = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(d1,d2,rest5);


const obj = {a:{b:{c:{d:25}}},lk:78,lp:{tl:40}}

const {a:{b:{c:{d:x1}}},lk,lp:{tl}} = obj
//Values from Mert

//Mert 103
let mert1 = (x1+lk)
let emre1 = (lk-x1+tl)
let Husrev1 = (lk - tl + x1)
console.log(mert1)
//Mert 10 
console.log(mert1-emre1)
//Mert 45
console.log((emre1-Husrev1)/2*3)
//10 + 10 + 25

//Emre 93
console.log(lk-x1+tl);
//Husrev 63
console.log(lk - tl + x1);
//Suleyman 13
console.log(lk-x1-tl);








