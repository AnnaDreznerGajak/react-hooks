import React from 'react'
import { useFetch } from './useFetch'
import { useRandomColor } from './useRandomColor'

export const CustomHook = () => {

  const {data, loading, error, refetch} = useFetch("https://v2.jokeapi.dev/joke/Any")
  const {color, changeColor} = useRandomColor("#fff");

  if (loading) return (<h1>Loading</h1>);
  if (error) console.log(error);

  return (
    <div style={{backgroundColor: color}}>
      <h1>{data?.setup}</h1>
      <h2>{data?.delivery}</h2>

      <button onClick={refetch}>Refresh</button>
      <button onClick={changeColor}> Change background </button>
    </div>
  )
}
