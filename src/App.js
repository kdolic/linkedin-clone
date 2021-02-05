import React from 'react';
import './css/App.css';
import './css/Header.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className='app_body'>
      <Sidebar />

      <Feed />
      {/* Widgets */}

      </div>
     
    </div>
  );
}

export default App;
