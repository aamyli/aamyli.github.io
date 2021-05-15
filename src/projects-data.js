import finetuned from "./images/finetuned.png"
import valeo from "./images/valeo.png"
import scopenote from "./images/scopenote.png"
import sudoku from "./images/sudoku.png"
import five from "./images/five.png"
import carousel from "./images/carousel.png"

export default {
  // work section
  projects: [
    {
      title: "Valeo", 
      techs: "REACT, EXPRESS, MONGODB, NODE, AZURE",
      // date: "AUG 2020 | Hack Against Covid",
      para:
        "(HackAgainstCovid Top 15/115) A tool to support small businesses in building digital presence to expand market reach. A progress tracker visualizes data through weekly income and digital progress inputs.",
      imageSrc: valeo,
      url: "https://github.com/HAC-2020/LOO41",
    },
    {
      title: "ScopeNote", 
      techs: "REACT, FLASK, AZURE, AXIOS",
      // date: "AUG 2020 | Hack the 6ix",
      para:
        "A full-stack chrome extension study tool that extracts key words and phrases from articles through an API and custom filter, employing CRUD functions. Both an onsite note-taker and allows for the exporting of printable flashcards.",
      imageSrc: scopenote,
      url: "https://github.com/aamyli/ScopeNote",
    },
    {
      title: "Sudoku Visualizer", 
      techs: "ANGULAR",
      // date: "JUL 2020 | Personal",
      para:
        "A backtracking algorithm visualizer that shows the random generation and solving of a sudoku board. Leverages asynchronous functions and state changes to display the algorithm's steps.",
      imageSrc: sudoku,
      url: "https://aamyli.github.io/sudoku-visualizer/",
    },
    {
      title: "FineTuned", 
      techs: "FLASK, AZURE, PYTHON PIL",
      // date: "JAN 2021 | Hack The North 2020++",
      para:
        "Full-stack web app that edits uploaded images based on audio and lyrical analysis of chosen songs, leveraging Azure's sentiment analysis and Python's PIL library.",
      imageSrc: finetuned,
      url: "https://github.com/ryli123/finetuned",
    },
    {
      title: "five", 
      techs: "JAVASCRIPT, HTML, CSS",
      // date: "JUL 2020 | Set Hacks",
      para:
        "Front-end chrome-extension that uses NY Times’ API to display real-time news spanning 5 industrial subtopics. Published on Chrome Store.",
      imageSrc: five,
      url: "https://devpost.com/software/learnnow",
    },
    {
      title: "3-Panel Carousel", 
      techs: "REACT",
      // date: "JUN 2020 | Personal",
      para:
        "A reusable React carousel component. Published on NPM.",
      imageSrc: carousel,
      url: "https://www.npmjs.com/package/react-3-carousel",
    },
  ]
}
