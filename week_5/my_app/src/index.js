import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Hero from './components/hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div>
      <Header/>
      <Hero/>
      <p>About us</p>
      <p>team lead</p>
      <p>contact us</p>
      <p>Footer</p>
    </div>
  </React.StrictMode>
);
