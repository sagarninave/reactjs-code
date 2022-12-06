import React, { useState, useEffect } from 'react';

function CountHook(props){
  useEffect(() => {
    document.title = props
  })
}

function CustomHook(){

  const [count, setCount] = useState(1);
  CountHook(count)

  return(
    <div>
      <strong class="heading"> Custom Hook </strong> <br/>
      <button onClick={() => setCount(count+1)}> Set Count {count} </button>
    </div>
  )
}

export default CustomHook;

