import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import data from "../projects-data"

const Work = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1 className="title">projects</h1>
            <h2 className="subtitle">some ideas brought to life</h2>
          </Fade>
          {/* <Projects /> */}
          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  techs={project.techs}
                  date={project.date}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
