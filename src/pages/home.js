import '../styles/home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { Component } from "react";
import Github from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import Mail from '../assets/mail.png';
import Profile from '../assets/pic3.png';
import City from '../assets/pic4.png';
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="home">
          <Col className="left-content" md={5}>
            <Row>
              <Row className="left-imgs">
                <img className="img-city" src={City}></img>
                <img className="img-profile" src={Profile}></img>
                
              </Row>
              <Row className="left-title">
                Hi, I'm Amy
              </Row>
              <Row className="left-intro">
                <p className="p1"><span className="p-start">excited for</span> longer days, new homes in tech, large windows and tall buildings</p>
                <p className="p2"><span className="p-start">aspiring to</span> diversify my media intake, spend time intentionally, go to more museums</p>
                <p className="p1"><span className="p-start">inspired by</span> big cities, thoughtful writing, people that love what they do</p>
              </Row>
              <Row className="left-links">
                <a
                  href="https://github.com/aamyli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <img className="left-logo" src={Github}/>
                </a>
                <a
                  href="https://www.linkedin.com/in/aamyli/"
                  target="_blank"
                  className="link"
                >
                  <img className="left-logo" src={LinkedIn}/>
                </a>
                <a
                  href="mailto:amy.li2@uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <img className="left-logo" src={Mail}/>
                </a>
              </Row>
              <Row className="left-desc">
                <p>I'm studying <span className="text-underline">Computer Science</span> at the <span className="text-underline">University of Waterloo</span> with a business specialization</p>
                <p>recently, I...</p>
                <ul className="left-list">
                  <li>am working at <span className="text-underline">Google DeepMind</span> in London this fall - excited to learn and love a new city and a new continent!</li>
                  <li>spent a summer in New York at Jane Street on the <span className="text-underline">Equities desk</span>, discovering some pretty interesting work in this problem sphere (let's talk about it) (could this be a home?) </li>
                  <li>explored San Francisco and everything west coast last year, reinspiring a curiousity for <span className="text-underline">urban planning</span> and <span className="text-underline">sustainable design</span>, as I've begun taking on some planning courses</li>
                </ul>
                <p>and in other moments...</p>
                <ul className="left-list">
                  <li>finding comfort and challenge in words as <span className="text-underline">I read for myself again</span></li>
                  <li>trying out new “extreme” sports with friends</li>
                  <li>resuming the rhythm of in-person campus life, as I start the second half of my undergrad</li>
                </ul>
              </Row>
              <Row>
                <p className="right-nav">
                  // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank" rel="noopener noreferrer" className="link">
                    resume
                  </a> 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link className="link" to="/projects">projects</Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link className="link" to="/writing">writing</Link>
                  </p>
              </Row>
            </Row>
          </Col>
          {/* <Col className="right-content" md={2}>
              <a
                href="mailto:amy.li2@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <p className="right-nav">resume</p>
              </a>
            <p className="right-nav">projects</p>
            <p className="right-nav">writing</p>
          </Col> */}
        </Row>
      </Container>
    );
  }
}
