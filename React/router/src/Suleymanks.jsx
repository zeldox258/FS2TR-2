import { Link, useParams } from "react-router-dom";

function Suleymanks(){

    const { id } = useParams();

    return(
        <div>
            <Link to={"/EmreDoner/" + Math.floor(id/6)}> EMRE </Link>
            <p>{id}</p>
        </div>
        
    )
}

export default Suleymanks;