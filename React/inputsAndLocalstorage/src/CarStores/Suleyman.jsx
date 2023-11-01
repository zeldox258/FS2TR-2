import { useState } from 'react';

const Suleyman = () => {
const [formData, setFormData] = useState({
    Model: "",
    Brand: "",
    Year: 0,
    Km: 0,
})

const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({...FormData,[name]:value});
}

const displayCars = () => {
    console.log(JSON.parse(localStorage.getItem("cars")))

}

const saveCars = () => {
    let carInfos = JSON.parse(localStorage.getItem("cars")) || [];
    carInfos.push(formData);
    localStorage.setItem(JSON.stringify("cars", JSON.stringify(carInfos)));
}

    return (
        <div>
            <form onSubmit={saveCars}>
                <label>Model:
                    <input 
                    type="text" 
                    name="model" 
                    value={formData.Model} 
                    onChange={handleChange}>

                    </input>
                </label>
                <label>Brand:
                    <input 
                    type="text" 
                    name="model" 
                    value={formData.Brand}
                    onChange={handleChange}>

                    </input>
                </label>
                <label>Year:
                    <input 
                    type="number" 
                    name="model" 
                    value={formData.Year}
                    onChange={handleChange}></input>
                </label>
                <label>KM:
                    <input 
                    type="number" 
                    name="model" 
                    value={formData.Km}
                    onChange={handleChange}></input>
                </label>
                <button type="Submit">ADD</button>
            </form>
            <button onClick={()=> {
                displayCars();
            }}>DISPLAY</button>
        </div>
    )
}

export default Suleyman;