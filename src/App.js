import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <header>
        <p> Ken was here</p>
      </header>
      <a className="App-link"
        href="https://scontent.fsyd8-1.fna.fbcdn.net/v/t1.0-9/577566_624080227620536_1733787268_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=aepL1lIw-F0AX_vahy0&_nc_ht=scontent.fsyd8-1.fna&oh=0c4ab8c38187a3935bc6e8c8b7a247b4&oe=5EAB6220">
        Finished project here - Ken
      </a>
      <p>
        Example <code>React.js</code> Application for Quantum UI site.
      </p>
      <a
        className="App-link"
        href="https://api.ses2a.zyrn.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out SES2A's API
      </a>      
    </div>
  );
}

export default App;