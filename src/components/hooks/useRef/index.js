import React, { useState } from 'react'
import UseRefComponentRerenderWithUseEffect from "./UseRefComponentRerenderWithUseEffect";
import UseRefComponentNotRerenderWithUseRef from "./UseRefComponentNotRerenderWithUseRef";
import UseRefAccessValue from "./UseRefAccessValue";
import CreateRefClassComponent from "./CreateRefClassComponent";
import ForwordRef from "./ForwordRef";
import NavLinks from "../../common/NavLinks";
import { navLinkData } from "./../../../constants";

export default function UseRef() {

  const [currentComponent, setCurrentComponent] = useState("AccessInputValueThroughUseRef");

  return (
    <>
      <NavLinks
        components={navLinkData.refs}
        currentComponent={currentComponent}
        setCurrentComponent={(data) => setCurrentComponent(data)}
      />

      {
        currentComponent === "AccessInputValueThroughUseRef" &&
        <UseRefAccessValue />
      }

      {
        currentComponent === "UseRefComponentRerenderWithUseEffect" &&
        <UseRefComponentRerenderWithUseEffect />
      }

      {
        currentComponent === "UseRefComponentNotRerenderWithUseRef" &&
        <UseRefComponentNotRerenderWithUseRef />
      }

      {
        currentComponent === "CreateRefClassComponent" &&
        <CreateRefClassComponent />
      }

      {
        currentComponent === "ForwordRef" &&
        <ForwordRef />
      }
    </>
  )
}
