import React, { useState } from 'react';
import UseState from "./useState/UseState";
import UseEffect from "./useEffect/UseEffect";
import UseEffectWidth from "./useEffect/UseEffectWidth";
import UseRef from "./useRef";
import UseMemo from "./useMemo/UseMemo";
import NavButtons from "../common/NavButtons";
import { buttonData } from "../../constants";

export default function Hooks() {

  const [active, setActive] = useState(() => "useState");

  const renderComponent = () => {
    if (active === "useState") {
      return <UseState />
    } else if (active === "useEffect") {
      return <UseEffect />
    } else if (active === "useEffectWidth") {
      return <UseEffectWidth />
    } else if (active === "useRef") {
      return <UseRef />
    } else if (active === "useMemo") {
      return <UseMemo />
    }
    return <h1> Hooks </h1>
  }

  return (
    <>
      <NavButtons
        active={active}
        components={buttonData.hooks}
        setActive={(data) => setActive(data)}
      />

      <div className="d-block">
        {renderComponent()}
      </div>
    </>
  )
}
