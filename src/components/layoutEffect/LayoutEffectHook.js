import React, { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectHook() {

    const inputRef = useRef();

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        inputRef.current.value = "New text"
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} value="Test" style={{ width: 400, height: 200 }} />
        </div>
    )
}

export default LayoutEffectHook;