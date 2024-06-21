
import './App.css';
import Sidebar from './sidebar';
import Home from './home';
import Header from './Header';
import { useState } from 'react';


function App() {

  
  return (
    <div className="grid-container">
      <Header />
      <Sidebar/>
      <Home/>

    </div>
  );
}

export default App;
