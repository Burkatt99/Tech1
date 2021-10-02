import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import MainPage from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/instances "></Route>
            <Route path="/pairs"></Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
