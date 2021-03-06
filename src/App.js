import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from '../src/components/chat'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Watson Chat
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Chat/>
    </div>
  );
}

export default App;
