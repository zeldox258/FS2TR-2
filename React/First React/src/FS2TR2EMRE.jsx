import { useState, useEffect } from "react";
import axios from"axios";
function FS2TR2EMRE({name,age,height}){

    console.log("Emre Parameters :",name,age,height);
    const [users, setUsers] = useState([])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    },[])

    return (
        <div>
            <h2>Current users phone</h2>
            <ul>
                {
                users.map(user => (
                    <li key={user.id}>{user.phone}</li>
                ))
                }
            </ul>
        </div>
        )
}


export default FS2TR2EMRE;