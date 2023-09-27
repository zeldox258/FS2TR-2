const mertButton = document.querySelector(".MertButton");
const H1Text = document.getElementById("h1Text");
const H1Text2 = document.getElementById("h1Text2");
const html = document.querySelector("HTML");

let count = 0;
let count2 = 10;


let startTime = performance.now(); // Başlangıç zamanını al

let counter = 0;
while (performance.now() - startTime < 1000) {
  counter++;
}

console.log("1 saniyede tamamlanan döngü sayısı: " + counter);


function Counter() {
    count++;
    H1Text.innerHTML = "You clicked " + count +" Times";
}

function ReverseCounter() {
    count2 --;

    if (count2 == 0) {
        H1Text2.textContent = "Congrats you have no clicks left";
        mertButton.textContent = "Refresh the page"
    }
    else{
        H1Text2.textContent = "You have left " + count2 +" clicks";
    }
        
}

//location.reload();
mertButton.addEventListener("click",((e)=>{

    if (count2 > 0) {
        Counter();
        ReverseCounter();
    }
    else {
        
        location.reload();
    }
    
    
}))


html.addEventListener("keypress",((e)=>{
    console.log(e);

    
}))



