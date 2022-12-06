import React, { useRef } from 'react';

export default function ForwordRef() {
  const inputRef = useRef();

  const ForwordRefChild = React.forwardRef((props, ref) => {
    return <input typle="text" ref={ref} />
  });

  return (
    <div>
      <strong className="heading"> Forword Ref </strong><br /><br />
      <ForwordRefChild ref={inputRef} /> <br />
      <button onClick={() => { inputRef.current.focus() }}> Focus </button> <br />
      <button onClick={() => { inputRef.current.style.color = "red" }}> Color </button> <br />
      <button onClick={() => { inputRef.current.style.backgroundColor = "yellow" }}> Background Color </button> <br />
    </div>
  )
}
