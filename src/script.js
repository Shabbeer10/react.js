import React, { useEffect, useState } from "react";


// Counter
export function Counter() {
    const [count,setCount] = useState(0);
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch("/data.json")
            .then(response=> response.json())
            .then(data => setData(data));
    }, []); // empty array means this effect runs once
    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>Click Me</button>
            <div>Name key fetched from data file: {data ? data[count].name : 'Loading Data...'}</div>
        </div>
    );
}

