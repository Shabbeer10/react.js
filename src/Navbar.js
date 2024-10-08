import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav>
            <Link className="navLink" to='/home'>Home</Link>
            <Link className="navLink" to='/about'>About</Link>
            <Link className="navLink" to='/user/Shabbeer'>Current Users</Link>
            <Link className="navLink" to=''>Hooks</Link>
        </nav>
    );
}

export default Navbar;