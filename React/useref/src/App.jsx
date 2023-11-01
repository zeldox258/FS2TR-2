import { useState } from 'react'
import './App.css'
import Parent from './Parent'
import UseForm from './UseForm'
import CarPool from './CustomHooks/CarPool'
import useUser from './CustomHooks/useUser'
import DancerPole from './CustomHooks/Dancerpole'
import UseJeweler from './CustomHooks/UseJeweler'
import EmreShoes from './CustomHooks/EmreShoes'

function App() {
  const [count, setCount] = useState(0)
  const { values, handleChange, resetForm } = UseForm({ name: '', email: '' });
  const [a1,a2,a3,a4,a5,a6] = CarPool({modifiedCarNumber:5,car:10});
  const [b1,b2,b3] = DancerPole({dancerNumber:99})
  const {age, height, weight, increaseHeight, decreaseHeight, increaseWeight, decreaseWeight} = useUser({age: 18, height: 180, weight: 70})
  const {shoesNumber,shoesGender,StockShoesNumber,StockShoesGender,resetStock,} = EmreShoes({shoesNumber:38,shoesGender:"male"})
  const {productCount, carat, increaseCount, setCaratValue} = UseJeweler({productCount:3, carat: 14,})
  
 

  
  console.log(a1,a2);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', values);
    resetForm();
    a4();
    a3();
    b2();
    b3();
  console.log(a1,a2);
  console.log(b1);

   // Husrev
   console.log('user', age, height, weight)
   increaseHeight(3)
   decreaseWeight(20)
   console.log('user', age, height, weight)
   // Husrev
  }

  return (
    <>
      <Parent/>

      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>Reset</button>
    </form>


    </>
  )
}

export default App
