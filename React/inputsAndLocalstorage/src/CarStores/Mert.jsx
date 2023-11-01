import { useState } from 'react'
function Mert () {

    
    const [count, setCount] = useState(0)
    const [formData, setFormData] = useState({
      year:'',
      brand:'',
      model:''
    })
  
    function handleChange(e){
      console.log(e.target);
      const{name,value} = e.target;
      setFormData({...formData,[name]:value});
    }
    function displayCars () {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        for (let i = 0; i < cars.length; i++) {
            console.log(cars[i]);
          
        }
    }
  
    function handleSubmit(e){
      e.preventDefault();
      console.log(`Model:${formData.model}, Brand: ${formData.brand}, Year: ${formData.year}`);
      const cars = JSON.parse(localStorage.getItem('cars')) || [];
      cars.push(formData);
      localStorage.setItem('cars', JSON.stringify(cars));
    }
    return(
    <div>

      <form onSubmit={handleSubmit}>
      <div>
          <label>
            Model:
            <input 
              type="text" 
              name="model" 
              id = 'model'
              value={formData.model}
              onChange={handleChange}
            
            />
          </label>
        </div>

        <div>
          <label>
            Year:
            <input 
              type="text" 
              name="year" 
              id = 'year'
              value={formData.year}
              onChange={handleChange}
            
            />
          </label>
        </div>
        <div>
          <label>
            Brand:
            <input 
              type="text" 
              name="brand" 
              id = 'brand'
              value={formData.brand}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Range:
            <input 
              type="text" 
              name="range" 
              id = 'range'
              value={formData.range}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" >Submit</button>
        
      </form>
      <button onClick={displayCars}>Display Cars</button>
    </div>
    )
}

export default Mert;