import React, {useReducer} from "react";

const reducer = (state, action) => {
        switch (action.type) {
            case "increment" : return {count: state.count + 1, showText: state.showText}
            case "display": return {count: state.count, showText: !state.showText}
            default: return state
        }
};

const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

    return (
        <div style={{textAlign: 'center'}}>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({type: "increment"});
                dispatch({type: "display"});
            }}>Click here</button>
            <hr/>
            {state.showText && <p>Text is showing</p>}
        </div>
    );
    
}

export default ReducerHook;