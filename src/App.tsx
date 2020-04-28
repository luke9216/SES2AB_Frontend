import React from "react";
import Routing from "./components/pages/Routing";
import "./App.css";
import Hamburger from "./components/common/Hamburger/Hamburger";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <Routing>
      <Hamburger />
    </Routing>
  );
};

export default App;
