import React, { useState, useEffect } from 'react'

export default function UseEffectWidth() {

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [width])

  return (
    <div>{width}</div>
  )
}
