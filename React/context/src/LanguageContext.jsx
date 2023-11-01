import React,{useState, createContext, useContext} from "react";

const MyContext = createContext();

const MyProvider = ({children}) =>{

    const [language,setLanguage] = useState("Tr");

    return <MyContext.Provider value={{language,setLanguage}}>{children}</MyContext.Provider>

}
const useMyContext = () =>{
    return useContext(MyContext);
}

export {useMyContext,MyProvider};