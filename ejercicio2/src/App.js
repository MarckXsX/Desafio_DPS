
import './App.css';
import Navbar from './components/Navbar';
// import { Route, Router, Routes } from 'react-router-dom';
import Conversor from './Conversor'
import Formulario from './Formulario';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  return (
   <Router>
     <div className='container-fluid'>
      <Navbar/>
      <Routes>
        <Route path='/formulario' element={<Formulario/>}/>
      </Routes>

      <Routes>
        <Route path='/conversor' element={<Conversor/>}/>
      </Routes>

      <Routes>
        <Route path='/' element={<h1 className='text-center mt-5'>Desarrollado por Marco Gerardo Serrano Lopez SL182556</h1>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;

