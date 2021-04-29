import React from "react"
import github from "./github.png"
const Card = ({ heading, techs, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl + 
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <h3 className="techs">{techs}</h3>
        {/* <h4 className="date">{date}</h4> */}
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github}>

            
          </img>
        </a>
        <p className="text">{paragraph}</p>
        
      </div>
    </div>
  )
}

export default Card
