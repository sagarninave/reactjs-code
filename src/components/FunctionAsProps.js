import React , { useState } from "react";

function FunctionAsProps(){

  const [users, setUsers] = useState(
    [
      {id:1, username:"sagarninave", email:"sagar@gmail.com", phone:"9657445206", password:"sagar0012"},
      {id:2, username:"sanketwankhede", email:"sanket@gmail.com", phone:"9657445206", password:"sanket0012"},
      {id:3, username:"vishalkashikar", email:"vishal@gmail.com", phone:"9657445206", password:"vishal0012"},
      {id:4, username:"onkarmehta", email:"onkar@gmail.com", phone:"9657445206", password:"onkar0012"},
      {id:5, username:"shubhamwarhade", email:"shubham@gmail.com", phone:"9657445206", password:"shubham0012"}
    ]
  ) 

  const GetFormDataForUser = (user) => {
    setUsers([...users, user]);
  }
  console.log("Update User List : ", users);

  return(
    <>
      <strong className="heading"> Function As a Props </strong> <br/>
      <CommonInputHandleForm getUser={GetFormDataForUser}/>
    </>
  )
}
export default FunctionAsProps;

export class CommonInputHandleForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      username:"", 
      email:"", 
      phone:"", 
      password:""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    });
  }

  submitForm = (e) =>{
    e.preventDefault();
    this.props.getUser(this.state)
  }

  render(){
    return(
      <form onSubmit={this.submitForm}>
        <strong> Form </strong> <br/>
        <input type="text" placeholder="username" id="username" onChange={this.handleChange}></input><br/>
        <input type="email" placeholder="email" id="email" onChange={this.handleChange}></input><br/>
        <input type="text" placeholder="phone" id="phone" onChange={this.handleChange}></input><br/>
        <input type="password" placeholder="password" id="password" onChange={this.handleChange}></input><br/>
        <button> Submit </button>
      </form>
    )
  }
}
