import React from 'react';

const AnonymousFunction = (title, description) => { 
  return(
    <div> 
      <strong className="heading"> Anonymous Function </strong> <br />
      <p> {title}, {description} </p>
    </div>
  )
}

export default AnonymousFunction;