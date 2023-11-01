import { useParams } from "react-router-dom";

function Omer(){
    const {id} = useParams();
    console.log(id);
    return(
        <div>Helikoper <h1>{id}</h1></div>
    )
}

export default Omer;