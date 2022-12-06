import React from 'react';
import '../App.css';
import classNames from 'classnames';
import Style from './../others/Style.module.css';

function Stylesheet(props){

  const inline = {
    color:"green",
    fontSize:"25px"
  }
  const dynamicClass = "dClass"
  const conditionalClass = props.value ? "heading1" : "heading" 
  const importedClass = classNames('iClass1', 'iClass2')
  const dictClass = classNames({
    'btn': true,
    'btn-pressed': false,
    'btn-over': true
  })

  return(
    <div>
      <strong className="heading"> CSS Stylesheet  </strong>

      <p style={inline}>hello! sagar, i am in inline css class</p>
      <p className="normalCss">hello! sagar, i am in normal css class</p>
      <p className={"myFont myColor myText"}>hello! sagar, i am in multiple css class</p>
      <p cla ssName={dynamicClass}> Hello! Sagar i am in dynamic css class </p>
      <p className={conditionalClass}> Hello! Sagar i am in conditional css class </p>
      <p className={importedClass}>hello! sagar, i am in imported classname css styled</p>
      <p className={dictClass}>hello! sagar, i am in object classname css styled</p>
      <p className={Style.style1}>hello! sagar, i am in css style module </p>
      <p className={props.name === "sagar" ? Style.conditionalStyle1 : Style.conditionalStyle2}> Hello! Sagar i am in conditional match css class </p>
      <p className={props.name !== "sagar" ? Style.conditionalStyle1 : Style.conditionalStyle2}> Hello! Sagar i am in conditional match css class </p>

    </div>
  )
}

export default Stylesheet;