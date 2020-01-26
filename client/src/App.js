import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import DashBoard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login/:userType" component={LoginPage} />
        <Route exact path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
