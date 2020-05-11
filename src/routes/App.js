import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login/Login";
import NotFound from "../containers/NotFound";
import Layout from "../components/layout/Layout";
import Dashboard from "../containers/Dashboard/Dashboard";

function SecureRoutes({ component, path, ...restElements }) {
  const storage = JSON.parse(localStorage.getItem("storage"));
  if (storage && storage.user) {
    return <Route path={path} component={component} {...restElements} />;
  } else {
    return <Redirect to="/login" {...restElements} />;
  }
}

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <SecureRoutes exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
