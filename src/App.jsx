import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Payment />} />
          <Route path='/success' element={<PaymentSuccess />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
