import { useState } from "react";

const Husrev = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
  });

  function handleChange(event) {
    let {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push(formData);
    localStorage.setItem('cars', JSON.stringify(cars));
  }

  function handleDisplayClick() {
    const cars = JSON.parse(localStorage.getItem('cars') || []);

    if(cars.length > 0) {
        cars.forEach(car => console.log(car));
    } else {
        console.log('There is nothing in the list')
    }
  }

  return (
    <div>
        <h1>Husrev</h1>
      <form onSubmit={handleSubmit}>
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <label>Model</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />

        <label>Year</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />

        <label>Color</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

        <input type="submit" value="submit" />
        <button onClick={handleDisplayClick}>Display All</button> 
      </form>
    </div>
  );
};

export default Husrev;
