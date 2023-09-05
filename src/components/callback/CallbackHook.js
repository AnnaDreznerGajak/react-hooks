import React, { useCallback, useState } from 'react';
import Search from './Search';

const userList = [
  "Ania",
  "Arnold",
  "Amazon",
  "Amonia",
  "Amika",
  "Amonka"
]

export const CallbackHook = () => {

  const [users, setUsers] = useState(userList);


  const handleSearch = useCallback((text) => {
    const newArray = userList.filter((username) => {
      return username.includes(text);
    });
    setUsers(newArray);
    console.log("handle search run!");
  }, []);

const shuffle = () => {
  const newArray = users.sort(() => Math.random() - 0.5);
  setUsers([...newArray]);
  console.log("shuffle run!");
}

return (
  <div>
    <button onClick={() => {
      shuffle();
    }}>Regenerate list</button>

    <Search onChange={handleSearch}/>
    
    <ul type="none">
      {
        users.map((user, index) =>
          <li key={index}>{user}</li>
        )
      }
    </ul>

  </div>
)
    }
