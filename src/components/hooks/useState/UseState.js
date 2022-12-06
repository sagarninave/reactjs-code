import React, { useState } from 'react';

const numb = () => {
  console.log("init");
  return 4;
};


export default function UseState() {

  const [count, setCount] = useState(() => numb());
  const [obj, setObj] = useState(() => ({ name: "sagar", age: 26 }));

  const increment = () => {
    setObj(preObj => {
      return { ...preObj, age: preObj.age + 1 }
    });
  }

  const decrement = () => {
    setObj(preObj => {
      return { ...preObj, age: preObj.age - 1 }
    });
  }


  return (
    <>
      {
        /*
          1. function version of state declaration inital value
          2. function version of state updation
          3. update object type data with useState()
          4. not conditional update useState() inside if condition
          5. useState() return array of value and function
         */
      }

      <div>
        <button onClick={() => setCount(pCount => pCount + 1)}> + </button>
        <button> {count} </button>
        <button onClick={() => setCount(pCount => pCount - 1)}> - </button>
      </div>

      <div>
        <button onClick={increment}> + Age</button>
        <button> {obj.age} {obj.name} </button>
        <button onClick={decrement}> - Age</button>
      </div>
    </>
  )
}
