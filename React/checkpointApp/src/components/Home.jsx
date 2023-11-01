import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [value,setValue] = useState(0);
    const navigate = useNavigate();

    return(
        <div>
            HOME
            <input value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button onClick={()=>{
                navigate('/details/'+value);
            }}>Details</button>
            <button onClick={()=>{
                navigate('/address/'+value);
            }}>Address</button>

        </div>
    )
}