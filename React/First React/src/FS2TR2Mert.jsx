import {useState, useEffect} from "react";
import axios from 'axios';

function FS2TR2Mert () {
    const [users, setUsers] = useState([]);
   
    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            console.log(response.data,"MERT");
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    }, []);

    return (
        <div>
        <h1>List users</h1>
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

export default FS2TR2Mert;