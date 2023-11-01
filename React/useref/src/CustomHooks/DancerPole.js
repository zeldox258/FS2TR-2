import React, {useState} from "react";

const DancerPole = (initialValues)=>{
    const [dancerNumber , setDancerNumber] = useState(initialValues.dancerNumber);

    function addDancerNumber () {
        setDancerNumber(dancerNumber+1)
    }

    function decreaseDancerNumber(){
        setDancerNumber(dancerNumber-1);
    }

    return [dancerNumber,addDancerNumber,decreaseDancerNumber]
}


export default DancerPole;