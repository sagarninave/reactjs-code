import React from 'react';

const MySimpleContext = React.createContext();

const SimpleContextConsumer = () => {
  return (
    <>
      <em> Consumer </em> <br />
      <MySimpleContext.Consumer>
        {value => value}
      </MySimpleContext.Consumer>
    </>
  )
}

const SimpleContext = () => {
  return (
    <>
      <strong className="heading"> Context API </strong> <br />
      <em> Provider </em> <br />
      <MySimpleContext.Provider value={"sagar"}>
        <SimpleContextConsumer />
      </MySimpleContext.Provider>
    </>
  )
}
export default SimpleContext;