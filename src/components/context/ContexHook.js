import React, { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";

export const AppContext = createContext(null)

function ContextHook() {
    const [userName, setUserName] = useState("");

    return (
        <AppContext.Provider value={{userName, setUserName}}>
            <Login/>
            <User/>
        </AppContext.Provider>
    )

}

export default ContextHook;