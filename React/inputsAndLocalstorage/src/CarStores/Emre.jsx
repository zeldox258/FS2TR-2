import { useState } from 'react'

function Emre() {
    const [formData, setFormData] = useState({
        model:'',
        brand:'',
        year:'',
        color:''
    })
    function holder(params) {
        const{name,value} = params.target;
        setFormData({...formData,[name]:value});
    }
    
    function submit(params) {
        params.preventDefault();
        let save = JSON.parse(localStorage.getItem("cars")) || []
      
        save.push(formData);
        localStorage.setItem('cars',JSON.stringify(save));
    }
    
    function display(params) {
        params.preventDefault();
        let saved = JSON.stringify(localStorage.setItem("cars")) || []
        console.log(saved);
    }
    return ( 
        <div>
            <form onSubmit={submit}>
                <label>Model :<input type='text' name='model' id='model' value={formData.model} onChange={holder}/></label>
                <label>Brand :<input type='text' name='brand' id='brand' value={formData.brand} onChange={holder}/></label>
                <label>Year :<input type='text' name='year' id='year' value={formData.year} onChange={holder}/></label>
                <label>Color :<input type='text' name='color' id='color' value={formData.color} onChange={holder}/></label>
                <button type="submit">Submit</button>
                <button onClick={display}>Display Screen</button>
            </form>
        </div>
     );
}

export default Emre;