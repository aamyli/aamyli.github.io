import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>about</h1>
            </Fade>
            <p>
            Hi! Thanks for stopping by! An aspiring software developer, I am working towards exploring the intersections surrounding mathematics, project architecture, and business, hoping to find my home somewhere in between.
              <br></br>
              <br></br>
              I am…
              <ul className="about-facts">
                <li>
                  studying <b>Computer Science</b> @ University of Waterloo and <b>Business Administration</b> @ Wilfrid Laurier University {" "} <span role="img" aria-label="Emoji">
                  📖
                  </span>
                  <br />
                </li>
                <li>
                  interning at KeepTruckin as a <b>software engineer</b> for my first co-op{" "}  <span role="img" aria-label="Emoji">
                  🛠
                  </span>
                  <br />
                </li>
                <li>
                  diving into some new topics, from machine learning to human evolution to anything else of interest{" "} <span role="img" aria-label="Emoji">
                  🌱
                  </span>
                </li>
                <li>
                  probably rewatching a show or movie (rewatches >> first watch) {" "} <span role="img" aria-label="Emoji">
                  🎥
                  </span>
                </li>
                <li>
                  finding ways to stay connected, and hoping to go back to campus soon!{" "} <span role="img" aria-label="Emoji">
                  🍵
                  </span>
                </li>

              </ul>
              <br></br>
                Some of my current interests are human-computer interaction, big data, and sustainability in tech. I am seeking <b>Winter 2022 opportunities</b>!
            </p>
            
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
