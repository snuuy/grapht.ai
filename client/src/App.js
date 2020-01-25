import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage"
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login/:userType" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
