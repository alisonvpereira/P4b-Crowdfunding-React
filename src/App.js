import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import CategoryListPage from "./pages/CategoryListPage";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/project/:id"><ProjectPage /></Route>
          <Route path="/project"><ProjectsPage /></Route>
          <Route path="/category"><CategoryListPage /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/logout"><LogoutPage /></Route>
          <Route path="/"><HomePage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;