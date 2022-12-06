import React, { useState, useEffect, useRef } from 'react'

export default function UseRefComponentNotRerenderWithUseRef() {
  
  const [name, setName] = useState("");

  /*
    Example 2
    useEffect does not count if we do not provide dependancy inface does not need provide dependancy
  */
  const countRef = useRef(0)
  console.log("component re-render ")
  useEffect(() => {
    console.log("render inside useEffect");
    countRef.current = countRef.current + 1
  }, []);

  const handle = e => {
    setName(e.target.value);
    countRef.current = countRef.current + 1
  }
  
  return (
    <>
      <input type="text" value={name} onChange={handle} />
      <p> {name} </p>
      <p> {countRef.current} </p>
    </>
  )
}
