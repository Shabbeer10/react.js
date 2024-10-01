import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav>
            <Link className="App-link" to='/'>Home</Link>
            <Link className="App-link" to='/about'>About</Link>
            <Link className="App-link" to='/user/shabbeer'>User Profile</Link>
        </nav>
    );
}

export default Navbar;