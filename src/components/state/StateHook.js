import React, {useState} from "react";

const StateHook = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleChangeInput = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>increment counter</button>
            <hr/>
            <input placeholder="Enter value" onChange={handleChangeInput} />
            {inputValue}
        </div>
    );
    
}

export default StateHook;