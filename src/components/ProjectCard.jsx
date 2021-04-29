import React, { Component } from "react";

const ProjectCard = (props) => {
  const SimpleList = ({ list }) => (
    <ul>
      {list.map((item) => {
        return (
          <p className="tag" key={item}>
            {item}
          </p>
        );
      })}
    </ul>
  );

  return (
    <div id="ProjectCard" className={props.side}>
      <div className="card_top">
        <div className="card_inner">
            <div className="card_body">
              <div className="card_tags">
                <SimpleList list={props.tags}></SimpleList>
              </div>
              <div className="card_desc">{props.desc}</div>
            </div>
        </div>
      </div>
      <div className="card_bottom">
        <div className="card_link">
          <div className="date">{props.date}</div>
          <div className="spacer"></div>
          <a href={props.imgLink} target="_blank">
            <img src={props.imgURL}></img>
          </a>
        </div>
        <div className="card_title">
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
