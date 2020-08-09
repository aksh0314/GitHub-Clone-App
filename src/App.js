import React from 'react';
import './App.css';
import Header from './Header';
import LowerNavbar from './LowerNavbar'
import Footer from './Footer';

function App() {
  return (
    // BEM naming convention // easy to read css classes
    <div>
      <Header />
      <LowerNavbar />
      <Footer />
    </div>
  );
}

export default App;
