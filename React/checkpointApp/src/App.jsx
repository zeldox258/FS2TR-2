import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Address from './components/Address';
import Details from './components/Details';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id'  element={<Details/>}/>
        <Route path='/address/:id' element={<Address/>}/>
      </Routes>
    </Router>

  )
}

export default App
