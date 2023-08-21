import React, { useEffect, useState } from "react";
import axios from "axios";

export const commentsURL = "https://jsonplaceholder.typicode.com/comments";

function EffectHook() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
       axios.get(commentsURL).then((response)=> {
        setData(response.data[0].email);
       })
    }, []);



    return (
        <div style={{textAlign: 'center'}}>
            Hello world!
            {data != "" && <p>{data}</p>}
            <p>{count}</p>
            <button onClick={()=> { setCount(prev => {
                return prev + 1
            })}}>Click</button>
        </div>
    )
}

export default EffectHook;