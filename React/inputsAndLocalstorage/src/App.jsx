import { useState } from 'react'
import './App.css'
import Husrev from './CarStores/Husrev';
import Mert from './CarStores/Mert';

function App() {
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

  function handleSubmit(e){
    e.preventDefault();
    console.log(`Model:${formData.model}, Brand: ${formData.brand}, Year: ${formData.year}`);
  }

  /*formData.modelYear
  formData['modelYear']
*/
  return (
    <div>
      <Husrev/>
      <Mert/>

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
        <button type="submit" >Submit</button>
        
      </form>
      <button onClick={()=>{
          console.log();
        }}>Display Cars</button>
    </div>
  )
}

export default App
