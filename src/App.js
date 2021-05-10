import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      {/*header */}
    <Header />
    {/*sidebasr */}
    <div className="sidebarmain">
      <Sidebar />
      {/*feed */}
      <Feed />
    </div>
    </div>
  );
}

export default App;
