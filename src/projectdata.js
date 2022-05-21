import finetuned from "./assets/finetuned.png"
import valeo from "./assets/valeo.png"
import scopenote from "./assets/scopenote.png"
import sudoku from "./assets/sudoku.png"
import five from "./assets/five.png"
import carousel from "./assets/carousel.png"
import cfkw from "./assets/cfkw2.png"
import sdc from "./assets/sdc.png"

export default {
  // work section
  projects: [
    {
        title: "Community Fridge KW / 01.2022 - 04.2022", 
        techs: "user interviews, scoping, product specs, prototyping... all-things product!",
        // date: "JAN 2021 | Hack The North 2020++",
        para:
          "(UW Blueprint) My gateway into product management, leading a team of designers and developers to build a scheduling platform for a local mutual-aid initiative. Aims to increase food accessibility and reduce waste in the Kitchener community.",
        imageSrc: cfkw,
        url: "https://github.com/uwblueprint/community-fridge-kw",
    },
    {
        title: "Social Diversity for Children / 09.2021 - 12.2021", 
        techs: "Next.js, Node.js, Heroku PostgreSQL, Prisma ORM, AWS, Railway",
        // date: "JAN 2021 | Hack The North 2020++",
        para:
          "(UW Blueprint) Program registration platform for the SDC Foundation, supporting their mission to empower children with disabilities through streamlining their program and volunteer management processes.",
        imageSrc: sdc,
        url: "https://github.com/uwblueprint/social-diversity-for-children",
    },
    {
        title: "FineTuned / 01.2021", 
        techs: "Flask, Azure, Python Imaging Library, Spotify API, Genius API",
        // date: "JAN 2021 | Hack The North 2020++",
        para:
          "(HackTheNorth) Full-stack web app that edits uploaded images based on audio and lyrical analysis of chosen songs, leveraging Azure's sentiment analysis and Python's PIL library.",
        imageSrc: finetuned,
        url: "https://github.com/ryli123/finetuned",
    },
    {
      title: "Valeo / 08.2020", 
      techs: "React, Node.js, Express, MongoDB, Azure",
      // date: "AUG 2020 | Hack Against Covid",
      para:
        "(HackAgainstCovid Top 15/115) A tool to support small businesses in building digital presence to expand market reach. A progress tracker visualizes data through weekly income and digital progress inputs.",
      imageSrc: valeo,
      url: "https://github.com/HAC-2020/LOO41",
    },
    {
      title: "ScopeNote / 08.2020", 
      techs: "React, Flask, Azure, Axios",
      // date: "AUG 2020 | Hack the 6ix",
      para:
        "(HackThe6ix) A full-stack chrome extension study tool that extracts key words and phrases from articles through an API and custom filter, employing CRUD functions. Both an onsite note-taker and allows for the exporting of printable flashcards.",
      imageSrc: scopenote,
      url: "https://github.com/aamyli/ScopeNote",
    },
    {
      title: "Sudoku Visualizer / 06.2020", 
      techs: "Angular",
      // date: "JUL 2020 | Personal",
      para:
        "A backtracking algorithm visualizer that shows the random generation and solving of a sudoku board. Leverages asynchronous functions and state changes to display the algorithm's steps.",
      imageSrc: sudoku,
      url: "https://aamyli.github.io/sudoku-visualizer/",
    },

    {
      title: "five / 06.2020", 
      techs: "JavaScript, HTML, CSS",
      // date: "JUL 2020 | Set Hacks",
      para:
        "Front-end chrome-extension that uses NY Times’ API to display real-time news spanning 5 industrial subtopics. Published on Chrome Store.",
      imageSrc: five,
      url: "https://devpost.com/software/learnnow",
    },
    {
      title: "3-Panel Carousel / 05.2020", 
      techs: "React",
      // date: "JUN 2020 | Personal",
      para:
        "A reusable React carousel component. Published on NPM.",
      imageSrc: carousel,
      url: "https://www.npmjs.com/package/react-3-carousel",
    },
  ]
}