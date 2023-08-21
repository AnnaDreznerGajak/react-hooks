import React, {useRef} from "react";

function RefHooks() {

    const inputRef = useRef();
    const inputRef2 = useRef();

    return (
        <div>
            <h1>Some name</h1>
            <input type="text" placeholder="Example name" ref={inputRef}/>
            <input type="text" placeholder="Example name2" ref={inputRef2}/>
            <button onClick={()=> {
                inputRef.current.focus();
                inputRef2.current.value = "";
            }}>Change name</button>
            </div>
    )
}

export default RefHooks;