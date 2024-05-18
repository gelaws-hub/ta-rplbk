import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./MainContainer";

const App = () => {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
};

export default App;
