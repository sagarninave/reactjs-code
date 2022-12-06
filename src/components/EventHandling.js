import React from 'react';

function btnClick(){
  alert("normal btn click function")
}

const btn1 = function btnClick2(){
  alert("button click fuction stored in variable")
}

const btn2 = () => {
  alert("function with arrow function")
}

function age1(a){
  if(a>=18){alert("eligible (age " + a + " )")}
  else{alert("not eligible (age " + a + " )")}
}

const age2 = function getAge(a){
  if(a>=18){alert("eligible (age " + a + " )")}
  else{alert("not eligible (age " + a + " )")}
}

const age3 = (a) => {
  if(a>=18){alert("eligible (age " + a + " )")}
  else{alert("not eligible (age " + a + " )")}
}

function age4(a){
  if(a>=18){return <span> eligible <br/> </span>}
  else{return <span> not eligible<br/>  </span>}
}

const age5 = function getAge(a){
  if(a>=18){return <span> eligible<br/>  </span>}
  else{return <span> not eligible<br/>  </span>}
}

const age6 = (a) => {
  if(a>=18){return <span> eligible<br/> </span>}
  else{return <span> not eligible<br/> </span>}
}

function PreventDefault(e){
  e.preventDefault();
  console.log("it is preventing default behaviour");
}

function Event() {

  const [count, setCount] = React.useState(0);

  return (
    <div>
      <strong className="heading"> Events </strong> <br />
      {age4(17)}
      {age5(18)}
      {age6(19)}
      <button onClick={btnClick}> Simple Function </button> <br/>
      <button onClick={btn1}> fuction stored in variable </button> <br/>
      <button onClick={btn2}> arrow function </button> <br/>
      <button onClick={() => age1(17)}> age 17 </button> <br/>
      <button onClick={() => age2(18)}> age 18</button> <br/>
      <button onClick={() => age3(19)}> age 19</button> <br/>
      <button onClick={() => setCount(count + 1)}> You clicked {count} times </button> <br/>
      <a href="https://www.google.com" onClick={PreventDefault}>Prevent Default</a>
    </div>
  )
}

export default Event;