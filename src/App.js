import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from './Components/Alert';

function App() {

  const [alert, setalert] = useState(null);
  const showalert = (msg, t)=>{
    setalert({
      message: msg,
      type: t
    })
    setTimeout(()=>{
      setalert(null);
    }, 2000)
  }

  return (
    <>
    <Router>
      <Navbar />
      <Alert alert = {alert}/>
      <Routes>
        <Route path="/" element={<Home showalert={showalert}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
