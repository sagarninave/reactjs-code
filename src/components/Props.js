import React from 'react';

function FunctionProps(props){
  return (
    <div>
      <strong className="heading"> Functional Props </strong> <br />
      <p> Hello! <strong> {props.name + " " + props.last} </strong></p>
    </div>
  )
}
export default FunctionProps;


export function FunctionChildProps(props){

  // Destructuring Props 
  const { name, last, children} = props;

  return (
    <div>
      <strong className="heading"> Child Function Props </strong> <br />
      <p> Hello! <strong> {props.name + " " + props.last} </strong></p>
      <em> <strong> {props.children} </strong> </em>

      {/* Destructuring Props  */}
      <br/><strong className="heading"> Destructuring Props </strong> <br/>
      <p> Hello! <strong> {name + " " + last} </strong></p>
      <em> <strong> {children} </strong> </em>
    </div>
  )
}

// Detailed Props

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
      width="50px"
      height="auto"
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

export function FunctionDetailedProps() {

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Sagar',
      avatarUrl: 'https://assets.about.me/background/users/s/a/g/sagarninave_1560146400_471.jpg',
    },
  };

  return (
    <div className="Comment">
      <strong className="heading"> Detailed Function Props </strong> <br />
      <UserInfo user={comment.author} />
      <div className="Comment-text">{comment.text}</div>
      <div className="Comment-date">
        {formatDate(comment.date)}
      </div>
    </div>
  );
}


export class ClassProps extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      first_name : props.first_name,
      last_name : props.last_name,
      today : new Date()
    }
  }

  render(){
    return(
      <div>
        <strong className="heading"> Class Props </strong> <br />
        <p> Hello! <strong> {this.state.first_name + " " + this.state.last_name} </strong> </p>
        <em> {this.state.today.toLocaleDateString()}</em>
      </div>
    )
  }
}