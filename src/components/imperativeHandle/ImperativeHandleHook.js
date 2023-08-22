import React, {useRef} from "react";
import Button from "./Buttom";

function ImperactiveHandleHook() {

    const buttonRef = useRef();

    return(
        <div>
            <button onClick={()=> {
                buttonRef.current.alterToggole();
            }}>Button from parent</button>
            <Button ref={buttonRef}/>
        </div>
    )


}

export default ImperactiveHandleHook;