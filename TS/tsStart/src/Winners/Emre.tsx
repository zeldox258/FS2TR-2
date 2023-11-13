
type person = {
    name: string,
    surname: string,
}
type info = {
    ssn: number,
    life: boolean,
}

const Emre  = () =>{
    const similation : person & info = {
        name: "Johny",
        surname: "Deep",
        ssn: 45865,
        life: true,
    }
    return(
        <>
        <p>{"Name:"}+ similation.name</p>
        <p>{"Surname:"}+ similation.surname</p>
        <p>{"ssn:"}+ similation.ssn</p>
        <p>{"life:"}+ similation.life</p>
        </>
    )

}

export default Emre;
