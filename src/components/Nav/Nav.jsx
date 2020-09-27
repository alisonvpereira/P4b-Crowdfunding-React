import React from "react";
import { Link  } from "react-router-dom";
import "./Nav.css";
import logo from "./skillender-logo-blk.png";

function Nav() {


    return (
    <nav>    


  
        <div >
            <Link to="/" >
                <img alt="" src={logo}className="Logo" />
            </Link>
        {localStorage.username  ? 
            <Link id="nav-username" to={`/users/${localStorage.username}`}>welcome back, {localStorage.username}!</Link>  : 
            <Link  id="nav-username"to="/login">Login</Link>} 

        
        {localStorage.username ?
            <Link id="nav-username" to="/logout">Logout</Link> : ""}
        </div>

        <div id="navbar">        

            <Link to="/project">Projects</Link>
            <Link to="/category">Categories</Link>
            <Link to="/users">Profiles</Link>
            <Link to="/skills">Skills</Link>
        </div>
    </nav>
    );
}

export default Nav;
