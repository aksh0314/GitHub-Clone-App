import React from 'react';
import './App.css';
import Header from './Header';
import LowerNavbar from './LowerNavbar'

function App() {
  return (
    // BEM naming convention // easy to read css classes
    <div>
      <Header />
      <LowerNavbar />
    </div>
  );
}

export default App;
