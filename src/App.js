import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./views/Header"
import Login from "./Components/Login"

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact>
        <Header />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      </Switch>
  </Router>
  );
}

export default App;
