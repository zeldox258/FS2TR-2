import {useState, useEffect} from "react";
import axios from 'axios';

function DependentMert() {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState(0);
    //https://jsonplaceholder.typicode.com/users
    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users/'+value)
        .then(response => {
            setUsers([response.data]);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    }, [value]);

  return (
    <div>
        <h1>Current users</h1>
        <ul>
            {
            users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))
            }
        </ul>
        
        <div>
            <button onClick={() => setValue(value - 1)}>Decrease</button>
            <h2>{value}</h2>
            <button onClick={() =>  setValue(value + 1)}>Increase</button>
        </div>
    </div>
  )
}

export default DependentMert
