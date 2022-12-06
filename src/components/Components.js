import React from 'react'; 

function FunctionComponent(){
  return(
    <div>
      <strong className="heading"> Functional Component </strong>
      <p> Hello! I Am Functional Component</p>
    </div>
  )
}

export default FunctionComponent;

export class ClassComponent extends React.Component{
  render(){
    return(
      <div>
        <strong className="heading"> Class Component </strong>
        <p> Hello! Class Component </p>
      </div>
    )
  }
}