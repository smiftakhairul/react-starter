import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
  matchPath,
} from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    // const match = matchPath(window.location.pathname, {
    //   path: "/counters",
    //   exact: true,
    //   strict: true,
    // });

    return (
      // <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <Route path="/counters">
              <span>
                &nbsp;
                <span className="badge badge-primary">
                  {this.props.totalCounters}
                </span>
              </span>
            </Route>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/counters"
                >
                  Counters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/test"
                >
                  Test
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      // </Router>
    );
  }
}

export default Navbar;
