import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar.tsx";
import Alert from "./components/layout/Alert.tsx";
import About from "./components/pages/About.tsx";
import Home from "./components/pages/Home.tsx";
import bookedMarkedRepos from "./components/pages/BookedMarkedRepos.tsx";

import GithubState from "./context/github/GithubState.tsx";
import AlertState from "./context/alert/AlertState.tsx";

import "./App.css";
import ToastMessage from "./components/ToastMessages/ToastMessages.tsx";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Repository Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Routes>
                <Route path="/github-repo-search" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/bookedMarked" Component={bookedMarkedRepos} />
              </Routes>
            </div>
          </div>
        </Router>
        <ToastMessage.Store />
      </AlertState>
    </GithubState>
  );
};

export default App;
