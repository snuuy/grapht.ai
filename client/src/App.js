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
<<<<<<< HEAD
        <Route exact path="/login/:userType" component={LoginPage} />
        <Route exact path="/dashboard" component={DashBoard} />
=======
        <Route exact path="/login" component={LoginPage} />
>>>>>>> ee249fd44d420565fb44969b52bb2fe9231e0295
      </Switch>
    </BrowserRouter>
  );
}

export default App;
