import { useParams } from "react-router-dom";

function Test() {
    const {id} = useParams();
    console.log(id + 5);
    return ( 
        <div>
        <a href={"/durmacalis/"+(Number(id)+5)}>Deneme</a>
        <h2>{id}</h2>
        </div>
     ); 
}

export default Test;