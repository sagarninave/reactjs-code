import React, { useState, useEffect } from 'react'

export default function UseRefComponentRerenderWithUseEffect() {

  const [name, setName] = useState("");

  /*
   example 1
   count by state 
   this will rernder component multiple times along with useEffect
 */
  console.log("component re-render ")
  const [renderCount, setRenderCount] = useState(0);
  useEffect(() => {
    console.log("render inside useEffect");
    setRenderCount(rCount => rCount + 1)
  }, [name]);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p> {name} </p>
      <p> {renderCount} </p>
    </>
  )
}
