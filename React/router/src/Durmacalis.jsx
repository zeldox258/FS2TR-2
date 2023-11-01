import { Link, useParams } from "react-router-dom";
function Durmacalis() {
  const {id} = useParams();
  console.log(id);
    return (
      <div>
        <Link to={'/husrev/'+(Math.floor(Number(id)) - 5)}>Husrev</Link>
      </div>
    )
  }
  
  export default Durmacalis;