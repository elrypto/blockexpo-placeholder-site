import React from 'react';
import screenshot from './screenshot.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>A new and improved blockexpo relaunches Q1 2020</p>
        <img src={screenshot}  alt="logo" />
       
      </header>
    </div>
  );
}

export default App;
