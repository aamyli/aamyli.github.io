import '../styles/projects.css';
import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Outlet, Link } from "react-router-dom";
import Card from "../components/projectcard"
import data from "../projectdata"

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
          <Row className="projects">
              <Row className="projects-back">
                <Link className="link" to="/"><i>// back to home</i></Link>
              </Row>
              <Row className="projects-header">
                  <p>some of my learnings in tech, in project form</p>
              </Row>
              <Row className="projects-list">
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
              </Row>
          </Row>
      
      </Container>
    );
  }
}