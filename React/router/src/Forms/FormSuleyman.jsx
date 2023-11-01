import { useState } from 'react'

export default function carAddApp() {

    function CarForm() {
        const [carName, setCarName] = useState('');
        const [carCount, setCarCount] = useState('');
    
        const handleAddCar = () => {
            const car = {name: carName, number: carCount}
    
            const cars = JSON.parse(localStorage.getItem('cars')) || [];
    
            cars.push(car);
    
            localStorage.setItem('car',JSON.stringify(cars));
        }
    
        return (
            <div>
                <input type="text" value={carName} onChange={(e)=> setCarName(e.target.value)} placeholder='car name'/>
                <input type="number" value={carCount} onChange={(e)=> setCarCount(e.target.value)} placeholder='car count'/>
                <button onClick={handleAddCar}>Add Car</button>
            </div>
        )
    }

    function CarList() {
        return (
            <>
            <ul>
                <li></li>
            </ul>
            <button>List All</button>
            </>
        )
    }


    return (
        <>
            <form>
                <h1>oto galeri</h1>
                <CarForm />
                <CarList />
            </form>
        </>
    )
}