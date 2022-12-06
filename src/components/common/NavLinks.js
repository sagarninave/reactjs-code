import React from 'react'

export default function NavLinks(props) {

  const { components, currentComponent, setCurrentComponent } = props;

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {
              components.map(item => <li className="nav-item" key={item.id}>
                <p
                  className={`
                    nav-link 
                    ${item.value === currentComponent ? "text-primary" : "text-muted"}`
                  }
                  onClick={() => setCurrentComponent(item.value)}
                >
                  {item.lable}
                </p>
              </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
