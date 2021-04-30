import React from "react"
import Fade from "react-reveal/Fade"
import data from "../projects-data"

import Github from "../images/github.png"
import Email from "../images/email.png"
import Linkedin from "../images/link.png"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          {/* <Fade bottom cascade>
            <h1>contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade> */}
          {/* <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
            </a> */}
            <div>
              <a
                href="https://github.com/aamyli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="github" src={Github} alt="icons"></img>
              </a>
              <a
                href="mailto:amy.li2@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="email" src={Email} alt="icons"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/aamyli/"
                target="_blank"
              >
                <img className="linkedin" src={Linkedin} alt="icons"></img>
              </a>

          </div>
         
          
        </div>
      </div>
    </div>
  )
}

export default Footer
