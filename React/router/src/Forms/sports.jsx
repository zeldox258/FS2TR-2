import { useState } from "react";
import "./App.css";


export default function SportsForm () {
        const[formData, setFormData] = useState({
            name: '',
            sport: '',
            yearsOfExp: ''
        });

        const handleChange = (e) => {
            const {name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        const handleAddData = () => {
            const existingData = JSON.parse(localStorage.getItem('sportsData')) || [];

            const newData = [...existingData, formData];

            localStorage.setItem('sportsData', JSON.stringify(newData));

            setFormData({
                name: '',
                sport: '',
                yearsOfExp: ''
            });
        };
        
        const handleDisplayData = () => {
            const savedData = JSON.parse(localStorage.getItem('sportsData'));

            if (savedData) {
                console.log('Saved Data', savedData);
            } else {
                console.log('No data found in localstorage.');
            }
        };
    return (
        <div>
            <h2>Sports Form</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="sport">Sport:</label>
                    <input
                        type="text"
                        id="sport"
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="yearsOfExp">Years of Exp:</label>
                    <input 
                        type="number"
                        id="yearsOfExp"
                        name="yearsOfExp"
                        value={formData.yearsOfExp}
                        onChange={handleChange}
                        />
                </div>
            </form>
            <button onClick={handleAddData}>Add Data</button>
            <button onClick={handleDisplayData}>Display Data</button>
        </div>
    );
}
