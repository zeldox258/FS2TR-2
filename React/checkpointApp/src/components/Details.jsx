import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from 'axios';

export default function Details(){
    const {id} = useParams();
    const[value,setValue] = useState(null);

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then((res)=>{
            console.log(res.data);
            setValue(res.data);
        })
        .catch((e)=>{
            console.log(e);
        })

    },[])
    return(
        <div>
            {value?
            <>{value.email} , {value.name} </>
            :
            <></>

            }
        </div>
    )
}