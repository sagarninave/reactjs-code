import React, { useState } from 'react';

function ChangeFunctionalStateData(){

  const [myState, SetStateData] = useState({first_name : 'Sagar', last_name : 'Ninave'});
  const [name, setName] = useState('Sagar')
  const [countNum, setCountNum] = useState(0);

  function ChangeFunctionData(f_name, l_name){
    SetStateData({first_name:f_name, last_name:l_name})
  }

  function handleClick(){
    setCountNum(countNum + 1);
  }

  return(
    <div>
      <strong className="heading"> Change Funmctional State Data </strong>
      <p> Hello! <strong> {myState.first_name + " " + myState.last_name} </strong> </p>
      <button onClick={() => ChangeFunctionData("Sanket", "Wankhede")}> Change Text </button> <br/>
      <p> Hello! <strong> {name} </strong> </p>
      <button onClick={() => setName(name === 'Sagar' ? 'Sanket' : 'Sagar')}>
        Toogle Name
      </button> <br/>
      <button onClick={handleClick}> You clicked {countNum} times </button>
    </div>
  )
}

export default ChangeFunctionalStateData; 


export class ChangeClassStateData extends React.Component{
  constructor(){
    super()
    this.state={
      first_name : 'Sagar',
      last_name : 'Ninave',
      count: 0
    };
  }

  ChangeClassData(f_name, l_name) {
    this.setState({first_name:f_name, last_name:l_name})
  }

  render(){
    return(
      <div>
        <strong className="heading"> Change Class State Data </strong>
        <p> Hello! <strong> {this.state.first_name + " " + this.state.last_name} </strong> </p>
        <button onClick={() => this.ChangeClassData("Sanket", "Wankhede")}> Change Text </button> <br/>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          You clicked {this.state.count} times        
        </button>
      </div>
    )
  }
}