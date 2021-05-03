
import React from "react";
import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
         <Route exact path="/" component={Home}/>
    </Router>
     
  );
} 

export default App;