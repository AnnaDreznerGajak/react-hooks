import React, { useCallback, useMemo, useState } from 'react'

export const CallbackHook = () => {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");

    const expensiveFunction = useCallback((num) => {
        console.log("expensiveFunction");  
        return Math.pow(num, 4);
    }, []);


    const expensiveResult = useMemo(() => {
        console.log("expensiveResult");    
        return expensiveFunction(number);
    }, [number, expensiveFunction])


    
  return (
    <div>

        <input type="text" onChange={(event) => setNumber(event.target.value)}/>
        <p>{expensiveResult}</p>
        <input type="text" onChange={(event) => setName(event.target.value)}/>
        <p>{name}</p>
    </div>
  )
}
