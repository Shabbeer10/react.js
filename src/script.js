import React, { useEffect, useState } from "react";

export function Counter() {
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export function Component(){
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch('https://api.example.com/data')
            .then(response=> response.json())
            .then(data => setData(data));
    }, []); // empty array means this effect runs once

    return <div>{data ? data.message : 'Loading Data...'}</div>;
}