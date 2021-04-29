import React, { Component } from "react";

// import ProjectCard from "../ProjectCard";
import Project from "./Project";
import Fade from "react-reveal/Fade"

import finetuned from "../images/finetuned.png"
import valeo from "../images/valeo.png"
import scopenote from "../images/scopenote.png"
import sudoku from "../images/sudoku.png"
import five from "../images/five.png"
import carousel from "../images/carousel.png"

const ScopeNote = (
  <div className="main-link">
  <a href={"https://github.com/aamyli/ScopeNote"} target="_blank">
  <img src={process.env.PUBLIC_URL + "/images/github-black.png"}></img>
  </a>
  <a href={"https://devpost.com/software/scopenote"} target="_blank">
  <img src={process.env.PUBLIC_URL + "/images/link-black.png"}></img>
  </a>
  </div>
)

const Valeo = (
  <div className="main-link">
  <a href={"https://github.com/HAC-2020/LOO41"} target="_blank">
  <img src={process.env.PUBLIC_URL + "/images/github-black.png"}></img>
  </a>
  <a href={"https://devfolio.co/submissions/valeo"} target="_blank">
  <img src={process.env.PUBLIC_URL + "/images/link-black.png"}></img>
  </a>
  </div>
)

const Sudoku = (
  <div className="main-link">
  <a href={"https://github.com/aamyli/sudoku-visualizer"} target="_blank">
  <img src={process.env.PUBLIC_URL + "/images/github-black.png"}></img>
  </a>
  <a href={"https://aamyli.github.io/sudoku-visualizer/"} target="_blank">
  <img src={process.env.PUBLIC_URL + "/images/link-black.png"}></img>
  </a>
  </div>
)

export default class Projects extends Component {
  render() {
    return (
      <div>
          <div className="proj1">
            <div className="proj_image">
              <img className="proj_img" src={scopenote}></img>
            </div>
            <div className="proj_left">
            <Project 
                tags={["ReactJS", "Flask", "Microsoft Azure", "Axios"]} 
                title="ScopeNote | HackThe6ix"
                date="A U G 2 0 2 0"
                desc="A full-stack chrome extension study tool that recognizes website articles and extracts key words and phrases through an API and custom filter, employing CRUD functions. Both an onsite note-taker and allows for the exporting of printable flashcards."
                links={ScopeNote}
                ></Project>
            </div>
          </div>
        </div>
    );
  }
}
