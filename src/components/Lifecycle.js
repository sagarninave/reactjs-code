import React, { useState, useEffect } from 'react';

// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/

export class CompleteLifeCycleClass extends React.Component{

  constructor(){
    super()
    this.state = {
      number : 1,
      value:"sagar"
    }
    console.log("CompleteLifeCycle : constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("CompleteLifeCycle : getDerivedStateFromProps");
    // return { number:100};
    return null;
  }

  componentDidMount(){
    console.log("CompleteLifeCycle : componentDidMount ", this.state.number)
  }

  shouldComponentUpdate(){
    console.log("CompleteLifeCycle : shouldComponentUpdate");
    return null
  }

  componentDidUpdate(prevProps, prevState){
    console.log("CompleteLifeCycle : componentDidUpdate ", this.state.number);
    return null
  }

  componentWillUnmount(){
    console.log("CompleteLifeCycle : componentWillUnmount");
  }

  render(){
    console.log("CompleteLifeCycle : Render & Return");
    return(
      <div>
        <strong className="heading"> Complete Class Lifecycle </strong>
        <em> <br/> Look into console.log("Complete LifeCycle") </em> <br/>
        <button onClick={() => this.setState({number : this.state.number + 1})}> 
          Increment {this.state.number}
        </button>
      </div>
    )
  }
}
export default CompleteLifeCycleClass;

export class NestedLifeCycleClassParentClass extends React.Component{

  constructor(){
    super()
    this.state = {
      number : 1
    }
    console.log("NestedLifeCycle : constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("NestedLifeCycle : getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("NestedLifeCycle : componentDidMount", this.state.number)
  }

  componentDidUpdate(prevProps, prevState){
    console.log("NestedLifeCycle : componentDidMount ", this.state.number);
  }

  componentWillUnmount(){
    console.log("NestedLifeCycle : componentWillUnmount");
  }

  render(){
    console.log("NestedLifeCycle : Render & Return");
    return(
      <div>
        <ChildClass/>
        <strong className="heading"> Nested Class Lifecycle </strong>
        <em> <br/> Look into console.log("Nested LifeCycle") </em> <br/>
        <button onClick={() => this.setState({number : this.state.number + 1})}> 
          Increment For Parent Component {this.state.number}
        </button>
      </div>
    )
  }
}

export class ChildClass extends React.Component{

  constructor(){
    super()

    this.state={
      number: 1
    }
    console.log("LifeCycle B : constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifeCycle B : getDerivedStateFromProps");
  }

  componentDidMount(){
    console.log("LifeCycle B : componentDidMount ", this.state.number);
  }

  componentDidUpdate(prevProps, prevState){
    console.log("LifeCycle B : componentDidMount ", this.state.number);
  }

  componentWillUnmount(){
    console.log("LifeCycle B : componentWillUnmount");
  }

  render(){
    console.log("LifeCycle B : Render & Return");
    return(
      <div>
        <em> Look into console.log("LifeCycle Class B") </em> <br/>
        <button onClick={() => this.setState({number : this.state.number + 1})}> 
          Increment For Child Component {this.state.number}
        </button>
      </div>
    )
  }
}

export class ClassComponentWillUnmount extends React.Component{

  componentDidMount(){    
    console.log("componentDidMount")
  }  

  componentWillUnmount(){    
    console.log("componentWillUnmount")
  }

  render(){
    return <p> Unmount component </p>
  }
}

export class ClassTimerLifecycle extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {    
    this.setState({      
      date: new Date()    
    });  
  }

  render() {
    return (
      <div>
        <strong className="heading"> Clock Lifecycle </strong>
        <p>Hello, Clock!</p>
        <h2>Current Time {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export function FunctionalLifeCycle() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> 
        You clicked Functional Lifrecycle {count} times 
      </button>
    </div>
  );
}