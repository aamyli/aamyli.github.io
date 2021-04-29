import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Logo from "../images/black_logo.png"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            <img className="navbar_logo" src={Logo}></img>
          </div>
          <div className="links-wrapper">
            {/* <button onClick={() => scrollTo("#work")}>Work</button> */}
            <button onClick={() => scrollTo("#about")}>about</button>
            <button onClick={() => scrollTo("#experience")}>experience</button>
            <button onClick={() => scrollTo("#projects")}>projects</button>
            {/* <button onClick={() => scrollTo("#contact")}>contact</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
