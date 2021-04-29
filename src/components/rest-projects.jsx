import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FadeInSection from "../FadeInSection";
import ProjectCard from "../ProjectCard";
import Project from "../Project";

const five = (
    <p className="card_desc">
     Front-end chrome-extension that uses <b>NY Times’ API</b> to display
     real-time news spanning 5 industrial subtopics. Published on Chrome Store.
    </p>
  );

const threepanel = (
    <p className="card_desc">
     A reusable React carousel component. Published on NPM
     accumulating <b>500+ downloads</b>. 
    </p>
  );

const trackme = (
    <p className="card_desc">
     Android app created in team using <b>Figma</b> and <b>Android Studios</b>;{" "}
    captures personal information to recommend healthy recipes.
    </p>
  );


const hangman = (
    <p className="card_desc">
     A simple, two-player game of hangman built solely using Java and its GUI, 
     focusing on <b>OOP principles</b>.
    </p>
  );



export default class RestProjects extends Component {
  render() {
    return (
      <container-fluid id="rest-projects">
          <FadeInSection>
          <Row className="rp" md={1} lg={2}>
          
          <Col>
          <ProjectCard
                side="left"
                imgLink={"https://devpost.com/software/learnnow"}
                imgURL={process.env.PUBLIC_URL + "/images/link-24.png"}
                tags={["Javascript", "HTML", "CSS"]}
                desc={five}
                title="five"
                date="J U L&nbsp; 2 0 2 0"
            ></ProjectCard>
          </Col>
   
          <Col>
             <ProjectCard
                side="right"
                imgLink={"https://www.npmjs.com/package/react-3-carousel"}
                imgURL={process.env.PUBLIC_URL + "/images/link-24.png"}
                tags={["ReactJS"]}
                desc={threepanel}
                title="3-panel carousel"
                date="J U N&nbsp; 2 0 2 0"
            ></ProjectCard>
          </Col>
        
          
       </Row>
       </FadeInSection>
       <FadeInSection>
       <Row className="rp" md={1} lg={2}>

          <Col>
          <ProjectCard
                side="left"
                imgLink={"https://play.google.com/store/apps/details?id=com.cynea.app&hl=en"}
                imgURL={process.env.PUBLIC_URL + "/images/link-24.png"}
                tags={["XML", "Java"]}
                desc={trackme}
                title="trackme"
                date="N O V&nbsp; 2 0 1 9"
            ></ProjectCard>
          </Col>

   
          <Col>
             <ProjectCard
                side="right"
                imgLink={"https://github.com/aamyli/hs-projects"}
                imgURL={process.env.PUBLIC_URL + "/images/github.png"}
                tags={["Java"]}
                desc={hangman}
                title="hangman"
                date="J A N&nbsp; 2 0 1 9"
            ></ProjectCard>
          </Col>
          
       </Row>
       {/* <div id="projects_bottom_spacer">
        </div> */}
       </FadeInSection>
       
      </container-fluid>
    );
  }
}
