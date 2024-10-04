import React from "react";
import { Counter } from "./script";

function Home() {
    return (
        <div className='container'>
            <h1>Home Page</h1>
            <p>Welcome to the home page</p>
            <Counter/>
        </div>
    )
}

export default Home;