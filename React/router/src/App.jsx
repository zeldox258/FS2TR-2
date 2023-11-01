import { useState } from "react";
import "./App.css";
import Emre from "./Emre";
import Suleyman from "./Suleyman";
import Home from "./Home";
import Test from "./EmreDoner";
import HusrevMustafaLale from "./HusrevMustafaLale";
import Durmacalis from "./Durmacalis";
import Suleymanks from './Suleymanks'
import FormHusrev from './Forms/FormHusrev'
import FormSuleyman from './Forms/FormSuleyman';
import SportsForm from './Forms/sports';



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Omer from "./Omer";

function App() {
//EmreDoner
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emre" element={<Emre />} />
          <Route path="/suleyman" element={<Suleyman />} />
          
          <Route path="/emredoner/:id" element={<Test />} />
          <Route path="/husrev/:id" element={<HusrevMustafaLale />} />
          <Route path="/suleymanks/:id" element={<Suleymanks />} />
          <Route path="/durmacalis/:id" element={<Durmacalis />} />
          <Route path="/omer/:id" element={<Omer />} />

          <Route path="/formhusrev" element={<FormHusrev />} />
          <Route path="/sports" element={<SportsForm />} />


          <Route path="/formsuleyman" element={<FormSuleyman />} />

          

        </Routes>
      </Router>
    </div>
  );
}

export default App;



İTÜ & Develhope ortaklığındaki .NET ve JavaScript kursuna katılarak Web developer olun! 

Sadece iş bulduktan sonra ödeme fırsatını kaçırmayın!!

Develhope x İTÜ ortaklığıyla .NET & JavaScript kursu

3 ay, yarı zamanlı, 100% online