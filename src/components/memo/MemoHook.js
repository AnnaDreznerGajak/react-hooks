import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { commentsURL } from "../effect/EffectHook";

function MemoHook() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get(commentsURL).then((response) => {
            setData(response.data);
        })
    }, [])

    const findTheLongestEmail = (emails) => {
        if (emails === null) return null;

        let theLongest = "";
    
        emails.forEach(element => {
            let currentEmail = element.email;

            if (currentEmail.length > theLongest.length)
                theLongest = currentEmail;

        });

        console.log("findTheLongestEmail is fired!");
        return theLongest;
    }

    const displayTheLongestEmail = useMemo(()=> findTheLongestEmail(data), [data]);

    return (
        <div>
            {data && <p>{displayTheLongestEmail}</p>}
            <button onClick={() => {
                setToggle(!toggle);
            }}>Click</button>
            {toggle && <p>Toggle</p>}
        </div>);
}
export default MemoHook;