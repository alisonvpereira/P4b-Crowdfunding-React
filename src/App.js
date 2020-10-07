import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectListPage from "./pages/ProjectListPage";
import CategoryPage from "./pages/CategoryPage";
import CategoryListPage from "./pages/CategoryListPage";
import SkillPage from "./pages/SkillPage";
import SkillListPage from "./pages/SkillListPage";
import UserListPage from "./pages/UserListPage";
import UserPage from "./pages/UserPage";
// import PledgePage from "./pages/PledgePage";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          {/* <Route path="/pledges">
            <PledgePage />
          </Route> */}

          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/projects">
            <ProjectListPage />
          </Route>
          <Route path="/category/:name">
            <CategoryPage />
          </Route>
          <Route path="/category">
            <CategoryListPage />
          </Route>
          <Route path="/skills/:name">
            <SkillPage />
          </Route>
          <Route path="/skills">
            <SkillListPage />
          </Route>
          <Route path="/users/:username">
            <UserPage />
          </Route>
          {localStorage.username ? (
            <Route path="/users">
              <UserListPage />
            </Route>
          ) : null}

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
