import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mert from './Mert';//Component import
import DependentMert from './DependentMert';
import FS2TR2EMRE from './FS2TR2EMRE';
import FS2TR2Mert from './FS2TR2Mert';
import FS2TR2Husrev from './FS2TR2Husrev';
import DolarConverter from './DolarConverter.jsx';

function App() {
  const [count, setCount] = useState(0)//hook
  const [count2, setCount2] = useState(0)
  //let count = 0;

  return (
    <div>
      <Mert/>
      <DolarConverter name="Husrev" age={29} hobies="Coding" />


      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <FS2TR2Husrev />
      <FS2TR2Mert/>
      {
        /* */

      }

      <FS2TR2EMRE name="Emre" age={25} />

      <h1>{count % 2 == 0 ? "Vite is the Best" :"Vite Sucks"} - {count2 % 5 == 0 ? "React is the Best" :"React Sucks"}</h1>
      <div className="card">
        <button onClick={() => {
            /*count = count + 1;*/  
            setCount((count) => {
              console.log(count+1)
              return count + 1}
            ); 
            
          }}>
          count is {count}
        </button>
        <button onClick={() => {
            /*count = count + 1;*/  
            setCount2((count2) => {

              return count2 + 3}
            ); 
            
          }}>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <DependentMert/>
      
    </div>
  )
}

export default App
