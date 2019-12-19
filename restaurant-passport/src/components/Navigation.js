import React from "react";
import {Link} from 'react-router-dom';
import "../index.css";

export default function Navigation() {
  return (
    <header className="ui centered">
      <nav>
        <Link to="/">Restaurant Passport </Link>
        <div className="nav-links">
          <br/>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}