import '../styles/writing.css';
import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
          <Row className="writing">
              <Row className="writing-back">
                <Link className="link" to="/"><i>// back to home</i></Link>
              </Row>
              <Row className="writing-header">
                  <p>i'm working on being better with words</p>
              </Row>
              <Row className="writing-list">
                <p className="writing-title">[04.2022] Project Spotlight: Community Fridge KW</p>
                <p className="writing-desc">An article I co-wrote for <span className="text-underline">                
                    <a
                    href="https://uwblueprint.org/"
                    target="_blank"
                    className="link"
                    >UW Blueprint</a></span> on Community Fridge KW, a mutual-aid initiative we've partnered with to support food accessibility in the Kitchener-Waterloo community. 
                    With a team of 17 developers, designers, and fellow product managers, our team spent the past 8 months scoping, building, and shipping a scheduling platform. 
                    <br />
                    <br />
                    <span className="text-underline">
                        <a
                        href="https://medium.com/uw-blueprint/project-spotlight-community-fridge-kw-7557ab240102"
                        target="_blank"
                        className="link">
                        Read about our problem statement and solution here!
                        </a>
                    </span>
                </p>
              </Row>
          </Row>
      
      </Container>
    );
  }
}