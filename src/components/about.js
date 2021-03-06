import React from "react"
import Fade from "react-reveal/Fade"
//import data from "../yourdata"

import profile from "../images/profile2.png"
import plant from "../images/plant.png"
import city from "../images/city.png"

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
              I amâ¦
              <ul className="about-facts">
                <li>
                  studying <b>Computer Science</b> @ University of Waterloo and <b>Business Administration</b> @ Wilfrid Laurier University {" "} <span role="img" aria-label="Emoji">
                  ð
                  </span>
                  <br />
                </li>
                <li>
                  interning at KeepTruckin as a <b>software engineer</b> for my first co-op{" "}  <span role="img" aria-label="Emoji">
                  ð 
                  </span>
                  <br />
                </li>
                <li>
                  diving into some new topics, from machine learning to human evolution to anything else of interest{" "} <span role="img" aria-label="Emoji">
                  ð±
                  </span>
                </li>
                <li>
                  probably rewatching a show or movie (rewatches >> first watch) {" "} <span role="img" aria-label="Emoji">
                  ð¥
                  </span>
                </li>
                <li>
                  finding ways to stay connected, and hoping to go back to campus soon!{" "} <span role="img" aria-label="Emoji">
                  ð¤
                  </span>
                </li>

              </ul>
              <br></br>
                Some of my current interests are human-computer interaction, big data, and sustainability in tech. I am seeking <b>Winter 2022 opportunities</b>!
            </p>
            
          </div>
          <div className="image-wrapper">
            <div className="img-profile-wrap">
              <img className="img-profile" src={profile} alt="about"></img>
              <p className="img-profile-desc">hi these hover things took me a while to make lol</p>
            </div>
            <div className="img-plant-wrap">
              <img className="img-plant" src={plant} alt="about"></img>
              <p className="img-plant-desc">Iâm no expert at plants but the family is always growing... hereâs the newest addition!</p>
            </div>
           <div className="img-city-wrap">
              <img className="img-city" src={city} alt="about"></img>
              <p className="img-city-desc">Growing up in smaller towns, Iâve always gravitated towards big cities and all the potential I feel whenever I visit one. From the design to the people to the culture, I hope Iâll find one thatâll be home one day.</p>
           </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
