import {useState, useEffect} from "react";
import axios from 'axios';

function Mert() {
    const [users, setUsers] = useState([]);
    //https://jsonplaceholder.typicode.com/users
    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    }, []);

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
    </div>
  )
}

export default Mert
