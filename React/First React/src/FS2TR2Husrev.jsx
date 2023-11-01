import { useState, useEffect } from "react";
import axios from "axios";

const FS2TR2Husrev = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data , "Husrev")
        setUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Husrev</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.email}</li>;
        })}
      </ul>
    </>
  );
};

export default FS2TR2Husrev;
