import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectHook() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=> {
        setData(response.data[0].email);
       })

       Promise.resolve({data: [{email: 'email@gmail.com'}]}).then((response) => {
        setData(response.data[0].email);
       })
    }, []);



    return (
        <div style={{textAlign: 'center'}}>
            Hello world!
            {data != "" && <p data-testid="data">{data}</p>}
            <p>{count}</p>
            <button onClick={()=> { setCount(prev => {
                return prev + 1
            })}}>Click</button>
        </div>
    )
}

export default EffectHook;