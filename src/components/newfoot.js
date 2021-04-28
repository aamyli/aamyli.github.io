import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

import Github from "../images/github.png"
import Email from "../images/email.png"
import Linkedin from "../images/linkedin.png"

const NewFooter = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        
            <div>
              <a
                href="https://www.linkedin.com/in/aamyli/"
                target="_blank"
              >
                <img src={Linkedin} alt="icons"></img>
              </a>
              <a
                href="https://github.com/aamyli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="icons"></img>
              </a>
              <a
                href="mailto:amy.li2@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Email} alt="icons"></img>
              </a>

          </div>
          </div>     
    </div>
  )
}

export default NewFooter
