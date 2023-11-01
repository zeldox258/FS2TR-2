import React from "react";
import { useMyContext } from "./LanguageContext";

const InnerComponent = ()=>{
    const {language,setLanguage} = useMyContext();
    
    setLanguage("French")
    return <div>{language}</div>
}

export default InnerComponent;