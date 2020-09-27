import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectListPage from "./pages/ProjectListPage";
import CategoryPage from "./pages/CategoryPage";
import CategoryListPage from "./pages/CategoryListPage";
import SkillPage from "./pages/SkillPage";
import SkillListPage from "./pages/SkillListPage";
import UserListPage from "./pages/UserListPage";
import UserPage from "./pages/UserPage";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/project/:id"><ProjectPage /></Route>
          <Route path="/project"><ProjectListPage /></Route>
          <Route path="/category/:id"><CategoryPage /></Route>
          <Route path="/category"><CategoryListPage /></Route>
          <Route path="/skills/:id"><SkillPage /></Route>
          <Route path="/skills"><SkillListPage /></Route>
          <Route path="/users/:username"><UserPage /></Route>
          <Route path="/users"><UserListPage /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/logout"><LogoutPage /></Route>
          <Route path="/"><HomePage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;