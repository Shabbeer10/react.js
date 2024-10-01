import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav>
            <Link className="navLink" to='/'>Home</Link>
            <Link className="navLink" to='/about'>About</Link>
            <Link className="navLink" to='/user/Shabbeer'>User Profile</Link>
        </nav>
    );
}

export default Navbar;