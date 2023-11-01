import React,{useState} from "react";

const CarPool = (initialValues)=>{
    const [carNumber , setCarNumber] = useState(initialValues.car);
    const [modifiedCarNumber , setModifiedCarNumber] = useState(initialValues.modifiedCarNumber);

    function increaseCarNumber(){
        setCarNumber(carNumber+1);
    }
    function decreaseCarNumber(){
        setCarNumber(carNumber-1);
    }
    function increaseModifiedCarNumber(){
        setModifiedCarNumber(modifiedCarNumber+1);
    }
    function decreaseModifiedCarNumber(){
        setModifiedCarNumber(modifiedCarNumber-1);
    }



    return [carNumber,modifiedCarNumber,increaseCarNumber,increaseModifiedCarNumber,decreaseCarNumber,decreaseModifiedCarNumber]
}

export default CarPool;


/*

Husrev useUser
Mert useDancer
Suleyman useJeweler
Emre useShoes

*/