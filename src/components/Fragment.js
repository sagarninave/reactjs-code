import React, { Fragment } from 'react';

function FunctionalFragment1(){
  return(
    <React.Fragment>
      <strong class="heading"> Functional Fragment 1 </strong>
      <p> Inspect Element </p>
    </React.Fragment>
  )
}

export default FunctionalFragment1;

export function FunctionalFragment2(){
  return(
    <Fragment>
      <strong class="heading"> Functional Fragment 2 </strong>
      <p> Inspect Element </p>
    </Fragment>
  )
}

export function FunctionalFragment3(){
  return(
    <>
      <strong class="heading"> Functional Fragment 3 </strong>
      <p> Inspect Element </p>
    </>
  )
}

export class ClassFragment extends React.Component {

  render() {
    return (
      <React.Fragment>
        <strong class="heading"> Class Fragment </strong>
        <p> Inspect Element </p>
      </React.Fragment>
    );
  }
}
