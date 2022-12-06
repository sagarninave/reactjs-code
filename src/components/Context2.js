import React from 'react';

const MySimpleContext = React.createContext();
const MyNestedContext = React.createContext();

const NestedContext = () => {

  const firstName = "Sagar";
  const lastName = "Ninave";

  return (
    <>
      <strong className="heading"> Context API </strong> <br />
      <em> Context Provider </em> <br />

      <MySimpleContext.Provider value={firstName}>
        <MyNestedContext.Provider value={lastName}>
          <NestedContextConsumer />
        </MyNestedContext.Provider>
      </MySimpleContext.Provider>
      
    </>
  )
}
export default NestedContext;

export const NestedContextConsumer = () => {
  return (
    <>
      <em> Context Consumer </em> <br />
      <MySimpleContext.Consumer>
        {
          myFirstName => {
            return (
              <MyNestedContext.Consumer>
                {
                  myLastName => {
                    return <h4> First Name : {myFirstName} <br/> Last Name : {myLastName} </h4>
                  }
                }
              </MyNestedContext.Consumer>
            )
          }
        }
      </MySimpleContext.Consumer>
    </>
  )
}