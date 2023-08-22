import React, { useState, forwardRef, useImperativeHandle } from "react";


const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);


    useImperativeHandle(ref, () => ({
        alterToggole() {
            setToggle(!toggle);
        }
    }));

    return (
        <>
            <button>
                Button from child
            </button>
            {toggle && <span>Toggle</span>}
        </>
    )
});

export default Button;