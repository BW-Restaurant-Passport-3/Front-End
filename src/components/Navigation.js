import React from "react";
import {Link} from 'react-router-dom';
import "../index.css";

export default function Navigation() {
  return (
    <header className="ui centered">
      <nav>
        <Link to="/"><h1>Restaurant Passport</h1></Link>
        <div className="nav-links">
          <br/>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">LogIn</Link>
        </div>
      </nav>
    </header>
  );
}