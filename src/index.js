import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Diagnosis from'./components/Diagnosis'
import TestAdvice from'./components/TestAdvice'
import MedicineHistory from './components/MedicineHistory'
import ChiefComplaints from'./components/ChiefComplaints'

ReactDOM.render(
  <div>
    <MedicineHistory></MedicineHistory>
  </div>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
