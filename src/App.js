import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      
      
      </Routes>
    </Router>
  );
}

export default App;
