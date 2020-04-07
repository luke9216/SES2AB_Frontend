import React from 'react';
import Routing from './components/pages/Routing'
import './App.css';

export interface AppProps { }

const App: React.SFC<AppProps> = () => {
  return (
    <Routing />
  );
}

export default App;
