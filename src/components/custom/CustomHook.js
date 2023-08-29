import React from 'react'
import { useFetch } from './useFetch'

export const CustomHook = () => {

  const {data, loading, error, refetch} = useFetch("https://v2.jokeapi.dev/joke/Any")

  if (loading) return (<h1>Loading</h1>);
  if (error) console.log(error);

  return (
    <div>
      <h1>{data?.setup}</h1>
      <h2>{data?.delivery}</h2>

      <button onClick={refetch}>Refresh</button>
    </div>
  )
}
