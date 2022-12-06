import React, { useState, useEffect } from 'react';

export default function UseEffect() {

  const [key, setKey] = useState(() => "posts")
  const [data, setData] = useState([])

  console.log("Re-Render");

  useEffect(() => {
    console.log("Mounting phase...")
    fetch(`https://jsonplaceholder.typicode.com/${key}`)
      .then(response => response.json())
      .then(json => {
        setData(json.slice(0, 10))
      })
    return () => {
      console.log("unMounting phase...")
    }
  }, [key]);

  return (
    <>
      {
        /*
          1. dependancy array of useEffect
          2. call on mounting phase
          3. unmount on component destroy using return use effect
          4. resize width get 
        */
      }

      <button onClick={() => setKey("posts")}> Posts </button>
      <button onClick={() => setKey("users")}> Users </button>
      <button onClick={() => setKey("comments")}> Comments </button>

      {
        data && data.map((item, index) => <pre key={index}>{JSON.stringify(item)}</pre>)
      }

    </>
  )
}
