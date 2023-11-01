import { useState } from "react";

function Satisfaction() {
    const [save, setSave] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('save', JSON.stringify(save) ) || []
    }
    const handleShow = () => {
        const saved = JSON.parse(localStorage.getItem(save))
        console.log(saved)
    }
    return ( 
        <div>
            <form>
                <label>BDay:<input type="date" placeholder="Plase enter date"/></label>
                <label>Satisfaction:<input type="text" placeholder="Plase enter text"/></label>
                <label>Name:<input type="text" placeholder="Plase enter text"/></label>
            </form>
            <button onSubmit={handleSubmit}/>save
            <button onClick={handleShow}/>show
        </div>
    );
}

export default Satisfaction;