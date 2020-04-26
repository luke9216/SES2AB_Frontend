import React from 'react';
import Routing from './components/pages/Routing'
import './App.css';

export interface AppProps { }

export const App: React.SFC<AppProps> = () => {
  return <Routing />
}

// export interface AppProps {
// }

// export interface AppState {
// }

// class App extends React.Component<AppProps, AppState> {
//   render() {
//     return (<Routing />);
//   }
// }

// export default App;
