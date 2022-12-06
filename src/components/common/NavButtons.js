import React from 'react'

export default function NavButtons(props) {
  
  const { components, active, setActive } = props;

  return (
    <div className='text-left'>
      {
        components.map(buttonItem => {
          return <button
            type="button"
            key={buttonItem.id}
            className={`ml-1 mb-2 btn btn-${active === buttonItem.value ? "primary" : "secondary"}`}
            onClick={() => setActive(buttonItem.value)}
          > {buttonItem.lable} </button>
        })
      }
    </div>
  )
}
