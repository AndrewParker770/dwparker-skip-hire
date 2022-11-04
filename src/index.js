import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';

import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Navbar />
    <Home />
    <Contact />
  </React.StrictMode>
);