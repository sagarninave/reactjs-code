import React , { useState } from "react";

function FunctionalForm(){

  //Note : values are not gatting directly from HTML element, 
  //       it is getting throuth states so that it is called Controlled Component
  //       Look into UseRef.js file to check Uncontrolled Component 

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const getUsername = (event) => {
    setUsername(event.target.value);
  }

  const getPassword = (event) => {
    setPassword(event.target.value);
  }

  const submitForm = (e) =>{
    e.preventDefault();
    console.log("my form data is : " + username + " " + password);
  }

  return(
    <form onSubmit={submitForm}>
      <strong className="heading"> Functional Form </strong><br/>
      <input type="text" placeholder="username" onChange={getUsername}></input><br/>
      <input type="password" placeholder="password" onChange={getPassword}></input><br/>
      <button> Submit </button>
    </form>
  )
}

export default FunctionalForm;

export class ClassForm extends React.Component{

  constructor(){
    super()
    this.state={
      username:"",
      password:""
    }
  }

  getUsername = (event) => {
    this.setState({username:event.target.value});
  }

  getPassword = (event) => {
    this.setState({password:event.target.value});
  }

  submitForm = (e) =>{
    e.preventDefault();
    console.log("my form data is : " + this.state.username + " " + this.state.password);
  }

  render(){
    return(
      <form onSubmit={this.submitForm}>
        <strong className="heading"> Class Form </strong> <br/>
        <input type="text" placeholder="username" onChange={this.getUsername}></input><br/>
        <input type="password" placeholder="password" onChange={this.getPassword}></input><br/>
        <button> Submit </button>
      </form>
    )
  }
}


export class CommonInputHandleForm extends React.Component{

  constructor(){
    super()
    this.state={
      username:"",
      email:"",
      phone:"",
      password:""
    }
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.id]:event.target.value
      }
    );
  }

  submitForm = (e) =>{
    e.preventDefault();
    console.log("Username : ", this.state.username);
    console.log("Email : ", this.state.email);
    console.log("Phone : ", this.state.phone);
    console.log("Password : ", this.state.password);
  }

  render(){
    return(
      <form onSubmit={this.submitForm}>
        <strong className="heading"> Common Input Field Handle Form </strong> <br/>
        <input type="text" placeholder="username" id="username" onChange={this.handleChange}></input><br/>
        <input type="email" placeholder="email" id="email" onChange={this.handleChange}></input><br/>
        <input type="text" placeholder="phone" id="phone" onChange={this.handleChange}></input><br/>
        <input type="password" placeholder="password" id="password" onChange={this.handleChange}></input><br/>
        <button> Submit </button>
      </form>
    )
  }
}

export function FunctionalFormValidation(){

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const [allFieldValues, setAllFieldValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = name => event => {
    if (name === 'firstName') {
      setFirstName(event.target.value);
    } else if (name === 'lastName') {
      setLastName(event.target.value);
    } else if (name === 'email') {
      setEmail(event.target.value);
    } else if (name === 'password') {
      setPassword(event.target.value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(event.target.value);
    }
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setAllFieldValues({ ...allFieldValues, [name]: event.target.value });
  }

  const validateForm = async e => {
    setErrorMessage(null)
    let checkEmail = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$.!%*?&]{8,}$/
    e.preventDefault()
    if (allFieldValues.firstName === '' &&
        allFieldValues.lastName === '' &&
        allFieldValues.email === '' &&
        allFieldValues.password === '') {
      setFirstNameError(true);
      setLastNameError(true);
      setEmailError(true);
      setPasswordError(true);
      setConfirmPasswordError(true);
      setErrorMessage('All Fields Required');
    } else if (allFieldValues.firstName === '') {
      setFirstNameError(true);
      setErrorMessage('First Name Required');
    } else if (allFieldValues.lastName === '') {
      setLastNameError(true);
      setErrorMessage('Last Name Required');
    } else if (allFieldValues.email === '') {
      setEmailError(true);
      setErrorMessage('E-mail Required');
    } else if (!checkEmail.test(allFieldValues.email)) {
      setPasswordError(true);
      setErrorMessage('Email format must be like yourname@example.com');
    } else if (allFieldValues.password === '') {
      setPasswordError(true);
      setErrorMessage('Password Required');
    } else if (!passwordCheck.test(allFieldValues.password)) {
      setPasswordError(true);
      setErrorMessage('Password does not meet the criterion.');
    } else if (allFieldValues.password.includes(allFieldValues.email)) {
      setPasswordError(true);
      setErrorMessage('Password must not contain your email.');
    } else if ((allFieldValues.password).toLowerCase().includes((allFieldValues.firstName).toLowerCase()) && (allFieldValues.password).toLowerCase().includes((allFieldValues.lastName).toLowerCase())) {
      setPasswordError(true);
      setErrorMessage('Password not contain your name.');
    } else if (allFieldValues.password !== allFieldValues.confirmPassword) {
      setConfirmPasswordError(true);
      setErrorMessage('The provided passwords do not match');
    } else {
      console.log("all good");
      console.log("Error Massage",errorMessage);
      SubmitForm()
    }
  }

  function SubmitForm(e){
    e.preventDefault()
    console.log("Error Massage",errorMessage);
    console.log("all fields on submit", allFieldValues)
  }

  return(
    <div>
      <form onSubmit={e => validateForm(e)}>
        <strong className="heading"> Functional Form Validation </strong> <br/>

        <input placeholder="First Name *" ype="text" onChange={handleChange('firstName')} value={firstName} required /> 
        <br/> {firstNameError ? errorMessage : null} <br/>

        <input placeholder="Last Name *" type="text" onChange={handleChange('lastName')} value={lastName} required/>
        <br/> {lastNameError ? errorMessage : null} <br/>

        <input placeholder="Email *" type="text" onChange={handleChange('email')} value={email} required/>
        <br/> {emailError ? errorMessage : null} <br/>

        <input placeholder="Password *" type="password" onChange={handleChange('password')} value={password} required/>
        <br/> {passwordError ? errorMessage : null} <br/>
        
        <input placeholder="Confirm Password*" type="password" onChange={handleChange('confirmPassword')} value={confirmPassword} required/>
        <br/> {confirmPasswordError ? errorMessage : null} <br/>

        <button onClick={SubmitForm}> Submit </button>
      </form>
    </div>
  )
}