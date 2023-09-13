let name = document.getElementById('name');
let phone = document.getElementById('phone');
let container = document.getElementById('container');
let submit = document.getElementById('submit');



console.log(name);
console.log(phone);
console.log(submit);
console.log(container);



submit.addEventListener('click',()=>{
    console.log("you  clicked to button");
    console.log(name.value);
    console.log(phone.value);
    //alert(name.value +"\n" + phone.value);

    name.value = "";
    phone.value = "";

    name.style.backgroundColor = "red";
    name.style.borderRadius = "10px";
    name.style.color = "blue";

    const styles = {
        color: 'red',
        backgroundColor: 'blue',
        fontSize: '20px',
        // Add more styles as needed
      };
      
      Object.assign(phone.style, styles);
      
      //container.innerHTML = "";
      container.classList.add('flexBox');
      let address = document.createElement('input');
      address.type = 'text';
      address.id = 'address';
      address.placeholder = 'Address';
      Object.assign(address.style, styles);

      console.log(address);
      //container.innerHTML += '<input type="text" id="address" placeholder="Address" style="color: red; background-color: blue; font-size: 20px;">';
      
      let addressField = document.getElementById("address");

      if(addressField){
        alert("You already have that field")
      }
      else{
        container.insertBefore(address,container.children[container.children.length-1]);
      }

})


let structure = [{mail:"",pass:""},{mail:"",pass:""},{mail:"",pass:""},{mail:"",pass:""}]



let mail = document.getElementById('mail');
let password = document.getElementById('password');
let register = document.getElementById('register');
let users = document.getElementById('users');

let registerFunction= () => {

    let obj = {
        mail:mail.value,
        password:password.value
    }

    let storage = localStorage.getItem('strg');

    if(storage){
        let parsed = JSON.parse(storage);
        parsed.push(obj);
        localStorage.setItem('strg',JSON.stringify(parsed));

    }
    else{
        localStorage.setItem('strg',JSON.stringify([obj]));
    }

}

let displayUsers = () => {
    let parsed = JSON.parse(localStorage.getItem('strg'));
    console.log(parsed)
  
}
register.addEventListener("click", registerFunction)
users.addEventListener("click", displayUsers);