import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  window.ethereum.enable();
  alert("fuck")
  var accounts = window.web3.eth.accounts;
  console.log(accounts);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
