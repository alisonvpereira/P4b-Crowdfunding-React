import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {

    return (
    <nav>
        <div id="nav-username">
        {localStorage.username  ? 
            <Link to="#">welcome back, {localStorage.username}!</Link>  : 
            <Link to="/login">Login</Link>} 
        <Link to="/users">Profiles</Link>
        <Link to="/skills">Skills</Link>
        
        {localStorage.username ?
            <Link to="/logout">Logout</Link> : ""}
        </div>

        <div id="navbar">        
            <Link to="/">Home</Link>
            <Link to="/project">Projects</Link>
            <Link to="/category">Categories</Link>
        </div>
    </nav>
    );
}

export default Nav;
