import React, {useRef} from "react";
import Child from "./Child";

function Parent(){

    const childRef = useRef();

    return(
        <div>
            Parent component
            <button onClick={()=>{
                childRef.current.printSuleyman();
                console.log(childRef.current.PI);
                
                }}>Click Me</button>
            <Child ref={childRef}/>
        </div>
    )

}

export default Parent;