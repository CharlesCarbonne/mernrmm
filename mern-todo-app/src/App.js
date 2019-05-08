import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import EditRelease from "./components/edit-release.component";
import CreateRelease from "./components/create-release.component";
import ReleasesList from "./components/releases-list.component";
import ReleasesListCd from "./components/releases-listcd.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Release App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Releases</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/cd" className="nav-link">Cd Releases</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Release</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={ReleasesList} />
          <Route path="/cd" exact component={ReleasesListCd} />
          <Route path="/edit/:id" component={EditRelease} />
          <Route path="/create" component={CreateRelease} />
        </div>
      </Router>
    );
  }
}

export default App;