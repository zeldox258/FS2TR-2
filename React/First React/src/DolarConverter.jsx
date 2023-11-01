import React, {useEffect,useState,useMemo} from "react";


function DolarConverter (props) {
    const [dolar, setDolar] = useState(0);
    const [euro, setEuro] = useState(0);
    const [euroToTl,setEuroToTl] = useState(0);
    const [lira, setLira] = useState(0);
    const DOLAR_RATE = 27.70;

    console.log("Props :",props);



    const tlValue = useMemo(()=> <h1>TL Value with memo: {DOLAR_RATE*dolar}</h1> ,[dolar]);

    useEffect(() => {
      let rate = Math.random()+27;
      console.log("Dollar :",rate);

      setLira(dolar*rate);
      
    }, [dolar])

    useEffect(() => {
      let rate = Math.random()+29;
      console.log("Euro :",rate);

      setEuroToTl(euro*rate);
    }, [euro])
    
    return (
        <div>
           <h1>Dollar Value: {dolar}</h1>
           <h1>TL Value:{lira}</h1>
           {tlValue}

           <button onClick={()=> {

            setDolar(dolar+1);
            //setLira((dolar+1)*DOLAR_RATE);

           }}>+</button>
           <button onClick={()=> {

            setDolar(dolar-1);
            //setLira((dolar - 1)*DOLAR_RATE);


           }}>-</button>

            <h1>Euro Value: {euro}</h1>
           <h1>TL Value:{euroToTl}</h1>
           <button onClick={()=> {

            setEuro(euro+1);
            //setLira((dolar+1)*DOLAR_RATE);

            }}>+</button>
            <button onClick={()=> {

            setEuro(euro-1);
            //setLira((dolar - 1)*DOLAR_RATE);


            }}>-</button>
        </div>
      )
}


export default DolarConverter;