import { useState } from 'react'

export const useRandomColor = (col) => {
    const [color, setColor] = useState(col);

    const changeColor = () => {
         let newColor = "#" + Math.random().toString(16).substr(-6);
        setColor(newColor);
        console.log(color);
    }

  return {color, changeColor};
}
