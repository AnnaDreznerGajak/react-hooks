import React, {memo} from 'react';

const Search = ({onChange}) => {

    console.log("Search rendered");
   
  return (
    <input type="text" placeholder="Enter name" onChange={(e) => onChange(e.target.value)} />
  )
}

export default memo(Search);
