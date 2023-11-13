hh
type Person = {
    id: string;
    name: string;
    age: number;
}

type Employee = Person & {
    employeeId: string;
    status: boolean;
}


const Husrev = () => {

    const worker1: Employee = {
        id: '52965487528',
        name: 'Erman',
        age: 68,
        employeeId: '56',
        status: true,
    }

    return (
    <div>
        <h3>{"ID: " + worker1.id}</h3>
        <h3>{"EmployeeID: " + worker1.employeeId}</h3>
        <h3>{"Name: " + worker1.name}</h3>
        <h3>{"Age: " + worker1.age}</h3>
        <h3>{"Status: " +  worker1.idstatus ? "Active": "Passive"}</h3>
  </div>
    );
};

export default Husrev;
