import React from 'react';

const MySimpleContext = React.createContext();
const MyNestedContext = React.createContext();

const ParentContext = () => {

  const firstName = "Sagar";
  const lastName = "Ninave";

  return (
    <>
      <strong className="heading"> Context API </strong> <br />

      <MySimpleContext.Provider value={firstName}>
        <MyNestedContext.Provider value={lastName}>
          <ChildContext />
        </MyNestedContext.Provider>
      </MySimpleContext.Provider>
      
    </>
  )
}
export default ParentContext;

export const ChildContext = () => {
  const first_name = React.useContext(MySimpleContext)
  const last_name = React.useContext(MyNestedContext)
  return (
    <>
      <em> {first_name} {last_name} </em> <br />
    </>
  )
}