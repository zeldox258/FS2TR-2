
export default function Ibo () {
    


type Human = {
    name:string,
    age:number,
    surname?:string
  }

  type Worker = {
    ssn:number
  }

  const Ibo : Human & Worker = {
    name: "Ibo" , 
    age: 26,
    ssn:29919
}
console.log(Ibo)
return (
    <>
     {Ibo}
    </>
)
}