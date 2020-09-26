import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {

    return (
    <nav>
        <Link to="/">Home</Link>

        {localStorage.username  ? 
            <Link to="#">{localStorage.username}</Link> : 
            <Link to="/login">Login</Link>} 

        {localStorage.username ?
            <Link to="/logout">Logout</Link> : ""}
        
    </nav>
    );
}

export default Nav;
