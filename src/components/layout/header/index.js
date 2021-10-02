import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                DASHBOARD
              </Link>
            </li>
            <li>
              <Link className="link" to="/instances">
                INSTANCES
              </Link>
            </li>
            <li>
              <Link className="link" to="/pairs ">
                PAIRS
              </Link>
            </li>
            <li>
              <Link className="link" to="/about ">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="link" to="/help ">
                HELP
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact ">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
