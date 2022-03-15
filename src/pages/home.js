import '../styles/home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { Component } from "react";
import Github from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import Mail from '../assets/mail.png';

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="home">
          <Col className="left-content" md={6}>
            <Row>
            <Row className="left-title">
              Hi, I'm Amy
            </Row>
            <Row className="left-intro">
              <p className="p1"><span className="p-start">experimenting with</span> my sewing machine, product scoping, all things coffee</p>
              <p className="p2"><span className="p-start">excited for</span> longer days, new homes in tech, large windows and tall buildings</p>
              <p className="p1"><span className="p-start">aspiring to</span> diversify my media intake, spend time intentionally, go to more museums</p>
              <p className="p2"><span className="p-start">inspired by</span> big cities, thoughtful writing, people that radiate love for what they do</p>
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
              <p>currently, I am...</p>
              <ul className="left-list">
                <li>studying computer science at the <span className="text-underline">University of Waterloo</span>, specializing in business</li>
                <li>building <span className="text-underline">big data pipelines</span> at Bloomberg, absorbing some finance jargon along the way</li>
                <li>leading a student team in creating software for a local NPO’s <span className="text-underline">mutual aid initiative</span>, streamlining food reallocation</li>
              </ul>
              <p>and in other moments...</p>
              <ul className="left-list">
                <li>finding comfort and challenge in words as <span className="text-underline">I read for myself again</span></li>
                <li>learning about <span className="text-underline">urban planning</span> and <span className="text-underline">sustainable design</span> through stories and internet scrolls</li>
                <li>trying out new “extreme” sports with friends (open to recommendations!)</li>
              </ul>
            </Row>
            </Row>
          </Col>
          <Col className="right-content" md={2}>
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
          </Col>
        </Row>
      </Container>
    );
  }
}
