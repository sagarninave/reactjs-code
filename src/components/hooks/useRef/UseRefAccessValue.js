import React from 'react'

export default function UseRefAccessValue() {
  //Note : values are gatting directly from HTML element so that it is called uncontrolled component

  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const submitForm = (e) => {
    e.preventDefault();
    console.group("Username");
    console.log("Username : ", usernameRef);
    console.log("Username Current: ", usernameRef.current);
    console.log("Username Current Tag Name: ", usernameRef.current.tagName);
    console.log("Username Current Base URI: ", usernameRef.current.baseURI);
    console.log("Username Current Value: ", usernameRef.current.value);
    console.log("Username Current Type: ", usernameRef.current.type);
    console.log("Username Current Placeholder: ", usernameRef.current.placeholder);
    console.groupEnd();

    console.group("Password");
    console.log("Password : ", passwordRef);
    console.log("Password Current: ", passwordRef.current);
    console.log("Password Current Tag Name: ", passwordRef.current.tagName);
    console.log("Password Current Base URI: ", passwordRef.current.baseURI);
    console.log("Password Current Value: ", passwordRef.current.value);
    console.log("Password Current Type: ", passwordRef.current.type);
    console.log("Password Current Placeholder: ", passwordRef.current.placeholder);
    console.groupEnd();
  }

  return (
    <form onSubmit={submitForm}>
      <strong className="heading"> Uncontrolled Component </strong><br /><br />
      <input type="text" placeholder="username" ref={usernameRef}></input><br />
      <input type="password" placeholder="password" ref={passwordRef}></input><br />
      <button> Submit </button>
    </form>
  )
}
