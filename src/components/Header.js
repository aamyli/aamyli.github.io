import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Resume from "../assets/resume.pdf"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              hi! I'm Amy{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                student developer + aspiring change-maker
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>
              <span role="img" aria-label="Emoji">
                💡
              </span>
              {" "}currently exploring: backend development, making prettier sushi, AI basics, caring for new plants, and non-fiction reads </p>
          </Fade>
          <Fade bottom>
            <a
              href={Resume} target="_blank"
              className="primary-btn"
            >
             view my resume!
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
