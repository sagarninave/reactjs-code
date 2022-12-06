import React, { PureComponent} from 'react';

class PureComponentExample extends React.Component{
  
  constructor(){
    super()
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
        <PureComponentClass number={this.state.number}/>
        <RegularComponentClass number={this.state.number}/>
      </div>
    )
  }
}
export default PureComponentExample;

export class PureComponentClass extends PureComponent{

  render(){
    console.log("Pure Component : ", this.props.number);
    return(
      <div>
        <strong> Pure Component Class </strong> <br/>
        Number : {this.props.number} <br/>
      </div>
    )
  }
}

export class RegularComponentClass extends PureComponent{

  render(){
    console.log("Regular Component : ", this.props.number);
    return(
      <div>
        <strong> Regular Component Class </strong> <br/>
        Number : {this.props.number} <br/>
      </div>
    )
  }
}