import React from 'react';
import FunctionalChildMemo from './FunctionalChildMemo';

class FunctionalMemo extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      number : 10
    }
  }

  render(){
    console.log("Pure Component Example : ", this.state.number);
    return(
      <div>
        <strong className="heading"> Pure Component </strong> <br/>
        <button onClick={()=>{this.setState({number: this.state.number})}}> Click Me {this.state.number}</button>
        <FunctionalChildMemo number={this.state.number}/>
      </div>
    )
  }
}
export default FunctionalMemo;