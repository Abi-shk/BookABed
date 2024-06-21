import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import SelectFlight from '../src/components/pages/SelectFlight';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/flights" element={<SelectFlight />} />
      </Routes>
    </Router>
  );
}

export default App;
