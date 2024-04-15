// src/Routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InvoicesPage from "./pages/InvoicesPage";
import MainPage from "./pages/MainPage";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/invoices" component={InvoicesPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
